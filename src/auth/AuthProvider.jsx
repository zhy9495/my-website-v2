import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.jsx'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [configError, setConfigError] = useState(null)

  useEffect(() => {
    // 检查环境变量配置
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey || 
        supabaseUrl.includes('your-') || 
        supabaseKey.includes('your-') ||
        supabaseUrl === 'https://your-mzjiswyndutpqmggwsxn.supabase.co') {
      setConfigError('Supabase 配置无效，请检查 .env 文件')
      setLoading(false)
      return
    }

    // 初始化获取当前会话
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('获取会话失败:', error)
        }
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      } catch (error) {
        console.error('初始化认证失败:', error)
        setConfigError('无法连接到 Supabase 服务，请检查网络和配置')
        setLoading(false)
      }
    }

    getSession()

    // 订阅认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    // 组件卸载时解绑订阅
    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password) => {
    if (configError) {
      throw new Error('Supabase 配置错误，无法执行认证操作')
    }

    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      
      if (error) {
        throw error
      }

      // 如果 data.session 为空，则紧接 signInWithPassword 作为兜底
      if (!data.session) {
        return await signIn(email, password)
      }

      return data
    } catch (error) {
      console.error('注册失败:', error)
      throw error
    }
  }

  const signIn = async (email, password) => {
    if (configError) {
      throw new Error('Supabase 配置错误，无法执行认证操作')
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      
      if (error) {
        throw error
      }

      return data
    } catch (error) {
      console.error('登录失败:', error)
      throw error
    }
  }

  const signOut = async () => {
    if (configError) {
      throw new Error('Supabase 配置错误，无法执行认证操作')
    }

    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        throw error
      }
    } catch (error) {
      console.error('登出失败:', error)
      throw error
    }
  }

  const value = {
    session,
    user,
    loading,
    signUp,
    signIn,
    signOut,
    configError
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

