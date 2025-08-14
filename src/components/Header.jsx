import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../auth/AuthProvider.jsx';
import Button from '../../design-system/components/Button.jsx';
import Input from '../../design-system/components/Input.jsx';

const Header = () => {
  const { user, signUp, signIn, signOut } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 当模态框关闭时，清空表单和错误
  useEffect(() => {
    if (!showLoginModal) {
      setEmail('');
      setPassword('');
      setError('');
    }
  }, [showLoginModal]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('请输入邮箱和密码');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // 先尝试登录
      await signIn(email, password);
      setShowLoginModal(false);
    } catch (error) {
      console.log('登录失败，错误信息:', error.message);
      
      // 如果登录失败，尝试注册
      if (error.message.includes('Invalid login credentials') || 
          error.message.includes('User not found') ||
          error.message.includes('Email not confirmed')) {
        try {
          console.log('用户未注册，正在自动注册...');
          await signUp(email, password);
          
          // 等待2秒后自动登录
          setTimeout(async () => {
            try {
              await signIn(email, password);
              setShowLoginModal(false);
            } catch (signInError) {
              setError(`自动登录失败: ${signInError.message}`);
            }
          }, 2000);
          
          setError('注册成功！正在自动登录...');
        } catch (signUpError) {
          console.log('注册失败:', signUpError.message);
          setError(`注册失败: ${signUpError.message}`);
        }
      } else {
        setError(`登录失败: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('登出失败:', error);
    }
  };

  const openLoginModal = () => {
    console.log('打开登录模态框');
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    console.log('关闭登录模态框');
    setShowLoginModal(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background-primary border-b border-border-primary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-text-primary text-2xl font-bold">Ying</h1>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-text-secondary text-sm">
                  欢迎, {user.email}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  disabled={isLoading}
                >
                  登出
                </Button>
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={openLoginModal}
                disabled={isLoading}
              >
                登录
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal - 背景完全透明，只有 modal 框本身是白色的 */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLoginModal}
          >
            {/* 背景遮罩 - 完全透明，让用户完全看到网页内容 */}
            <motion.div
              className="absolute inset-0 bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* 模态框内容 - 纯白底色，增强阴影效果让弹窗更突出 */}
            <motion.div
              className="relative bg-white rounded-lg p-6 w-full max-w-sm shadow-2xl border border-gray-200"
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.2, 
                ease: [0.4, 0.0, 0.2, 1] 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={closeLoginModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="关闭"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-5">
                <h2 className="text-gray-900 text-lg font-semibold mb-2">登录</h2>
                <p className="text-gray-600 text-sm">
                  如果账户不存在，我们将自动为您创建
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="邮箱地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="sm"
                  disabled={isLoading}
                  autoComplete="email"
                />

                <Input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="sm"
                  disabled={isLoading}
                  autoComplete="current-password"
                />

                {error && (
                  <motion.div
                    className="p-3 bg-red-50 border border-red-200 rounded-md"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <p className="text-red-600 text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={closeLoginModal}
                    disabled={isLoading}
                  >
                    取消
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    fullWidth
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    {isLoading ? '处理中...' : '登录/注册'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
