import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { colors, spacing, typography } from '../tokens/index.js';

const inputVariants = tv({
  base: [
    'w-full rounded-lg border bg-background-secondary text-text-primary',
    'placeholder:text-text-secondary',
    'focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-text-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-all duration-200',
  ],
  variants: {
    size: {
      sm: [
        'px-3 py-2 text-sm',
        'text-[22.125px]',
        'font-weight-[300]',
        'line-height-[1.2907562683276435]',
      ],
      md: [
        'px-4 py-3 text-base',
        'text-[22.125px]',
        'font-weight-[300]',
        'line-height-[1.2907562683276435]',
      ],
      lg: [
        'px-6 py-4 text-lg',
        'text-[22.125px]',
        'font-weight-[300]',
        'line-height-[1.2907562683276435]',
      ],
    },
    variant: {
      default: 'border-border-primary',
      error: 'border-status-error focus:ring-status-error focus:border-status-error',
      success: 'border-status-success focus:ring-status-success focus:border-status-success',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    fullWidth: true,
  },
});

const Input = React.forwardRef(({
  children,
  size = 'md',
  variant = 'default',
  fullWidth = true,
  className,
  disabled = false,
  error,
  success,
  icon,
  iconPosition = 'left',
  label,
  helperText,
  ...props
}, ref) => {
  const inputClass = inputVariants({
    size,
    variant: error ? 'error' : success ? 'success' : variant,
    fullWidth,
    className,
  });

  const renderIcon = () => {
    if (!icon) return null;
    
    const iconClass = 'flex-shrink-0 text-text-secondary';
    const iconElement = React.cloneElement(icon, {
      className: iconClass,
      size: size === 'sm' ? 16 : size === 'lg' ? 24 : 20,
    });

    return iconElement;
  };

  const renderInput = () => {
    const inputElement = (
      <motion.input
        ref={ref}
        className={inputClass}
        disabled={disabled}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.1 }}
        {...props}
      />
    );

    if (icon) {
      return (
        <div className="relative">
          {iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {renderIcon()}
            </div>
          )}
          {React.cloneElement(inputElement, {
            className: `${inputClass} ${iconPosition === 'left' ? 'pl-10' : 'pr-10'}`,
          })}
          {iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {renderIcon()}
            </div>
          )}
        </div>
      );
    }

    return inputElement;
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      {renderInput()}
      {helperText && (
        <p className={`text-sm ${error ? 'text-status-error' : success ? 'text-status-success' : 'text-text-secondary'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
