# Header 组件功能说明

## 概述
新增的 Header 组件提供了完整的用户认证功能，遵循设计系统规范，实现了智能的登录/注册逻辑。

## 功能特性

### 1. 智能认证逻辑
- **已注册用户**: 直接使用邮箱密码登录
- **未注册用户**: 自动注册后等待2秒自动登录
- **密码错误**: 显示明确的错误提示

### 2. 用户体验
- 固定在页面顶部，不随滚动移动
- 响应式设计，适配不同屏幕尺寸
- 优雅的动画效果（使用 Framer Motion）
- 加载状态指示器

### 3. 设计系统集成
- 使用 `@design-system/` 的 Button 和 Input 组件
- 遵循设计系统的颜色、字体、间距规范
- 一致的视觉风格和交互反馈

## 组件结构

### Header 组件位置
```
src/components/Header.jsx
```

### 主要功能区域
1. **左侧**: 品牌 Logo "Ying"
2. **右侧**: 认证状态和操作按钮
   - 未登录: 显示"登录"按钮
   - 已登录: 显示用户邮箱和"登出"按钮

### 登录模态框
- 邮箱输入框
- 密码输入框
- 错误信息显示
- 取消/确认按钮

## 使用方法

### 1. 基本使用
```jsx
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      {/* 其他内容 */}
    </div>
  );
}
```

### 2. 样式调整
Header 使用固定定位，需要为页面内容添加顶部间距：
```jsx
<div className="pt-20"> {/* 为 Header 留出空间 */}
  <YourContent />
</div>
```

## 认证流程

### 登录流程
1. 用户点击"登录"按钮
2. 弹出登录模态框
3. 用户输入邮箱和密码
4. 系统先尝试登录
5. 如果失败且是"Invalid login credentials"错误，自动尝试注册
6. 注册成功后等待2秒自动登录
7. 登录成功后关闭模态框

### 错误处理
- 输入验证: 检查邮箱和密码是否填写
- 网络错误: 显示具体的错误信息
- 认证失败: 区分密码错误和账户不存在

## 技术实现

### 依赖组件
- `Button`: 设计系统按钮组件
- `Input`: 设计系统输入框组件
- `useAuth`: 认证上下文 Hook

### 状态管理
- `showLoginModal`: 控制模态框显示
- `email/password`: 表单输入值
- `isLoading`: 加载状态
- `error`: 错误信息

### 动画效果
- 模态框淡入淡出
- 内容缩放动画
- 按钮悬停效果

## 自定义配置

### 修改品牌名称
```jsx
// 在 Header.jsx 中修改
<h1 className="text-text-primary text-2xl font-bold">你的品牌名</h1>
```

### 调整样式
Header 使用 Tailwind CSS 类名，可以通过修改类名来调整样式：
```jsx
// 修改背景色
<header className="bg-your-custom-color">

// 修改间距
<div className="px-your-spacing py-your-spacing">
```

### 修改认证逻辑
可以在 `handleLogin` 函数中调整认证流程：
```jsx
const handleLogin = async (e) => {
  // 自定义认证逻辑
};
```

## 注意事项

1. **环境变量**: 确保 `.env` 文件包含正确的 Supabase 配置
2. **依赖安装**: 确保 `framer-motion` 已安装
3. **设计系统**: 确保设计系统组件正常工作
4. **响应式**: Header 在不同屏幕尺寸下都能正常显示

## 故障排除

### 常见问题
1. **Header 不显示**: 检查组件是否正确导入
2. **样式异常**: 确认 Tailwind CSS 配置正确
3. **认证失败**: 检查 Supabase 配置和网络连接
4. **动画不工作**: 确认 framer-motion 已安装

### 调试方法
- 检查浏览器控制台错误
- 验证组件 props 传递
- 确认状态更新逻辑
- 测试认证流程各步骤

