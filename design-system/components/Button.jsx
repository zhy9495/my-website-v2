import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { colors, spacing, typography } from '../tokens/index.js';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      primary: [
        'bg-text-primary text-background-primary border-transparent',
        'hover:bg-text-secondary hover:scale-105',
        'active:scale-95',
      ],
      secondary: [
        'bg-transparent text-text-primary border-border-primary',
        'hover:bg-text-primary hover:text-background-primary hover:border-text-primary',
        'active:scale-95',
      ],
      ghost: [
        'bg-transparent text-text-primary border-transparent',
        'hover:bg-text-primary hover:text-background-primary',
        'active:scale-95',
      ],
      outline: [
        'bg-transparent text-text-primary border-border-primary',
        'hover:bg-text-primary hover:text-background-primary',
        'active:scale-95',
      ],
    },
    size: {
      sm: [
        'px-3 py-2 text-sm',
        'text-[13.34375px]',
        'font-weight-[400]',
        'line-height-[1.0491803278688525]',
      ],
      md: [
        'px-5 py-3 text-base',
        'text-[13.34375px]',
        'font-weight-[400]',
        'line-height-[1.0491803278688525]',
      ],
      lg: [
        'px-6 py-4 text-lg',
        'text-[13.34375px]',
        'font-weight-[400]',
        'line-height-[1.0491803278688525]',
      ],
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
});

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  ...props
}, ref) => {
  const buttonClass = buttonVariants({
    variant,
    size,
    fullWidth,
    className,
  });

  const renderIcon = () => {
    if (!icon) return null;
    
    const iconClass = 'flex-shrink-0';
    const iconElement = React.cloneElement(icon, {
      className: iconClass,
      size: size === 'sm' ? 16 : size === 'lg' ? 24 : 20,
    });

    return iconElement;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading...</span>
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          <span>{children}</span>
          {renderIcon()}
        </>
      );
    }

    return (
      <>
        {renderIcon()}
        <span>{children}</span>
      </>
    );
  };

  return (
    <motion.button
      ref={ref}
      className={buttonClass}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
