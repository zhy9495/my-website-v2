import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { colors, spacing, typography } from '../tokens/index.js';

const cardVariants = tv({
  base: [
    'bg-background-card border border-border-primary rounded-lg',
    'transition-all duration-200',
  ],
  variants: {
    variant: {
      default: 'bg-background-card',
      elevated: 'bg-background-card shadow-lg',
      outlined: 'bg-transparent border-2',
      interactive: [
        'bg-background-card cursor-pointer',
        'hover:bg-background-secondary hover:border-text-primary',
        'hover:scale-[1.02] hover:shadow-lg',
        'active:scale-[0.98]',
      ],
    },
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    fullWidth: false,
  },
});

const Card = React.forwardRef(({
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  className,
  interactive = false,
  onClick,
  header,
  footer,
  image,
  imageAlt,
  ...props
}, ref) => {
  const cardClass = cardVariants({
    variant: interactive ? 'interactive' : variant,
    size,
    fullWidth,
    className,
  });

  const renderImage = () => {
    if (!image) return null;
    
    return (
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={imageAlt || 'Card image'}
          className="w-full h-48 object-cover"
        />
      </div>
    );
  };

  const renderHeader = () => {
    if (!header) return null;
    
    return (
      <div className="border-b border-border-divider pb-4 mb-4">
        {typeof header === 'string' ? (
          <h3 className="text-[22.875px] font-[300] text-text-primary">
            {header}
          </h3>
        ) : (
          header
        )}
      </div>
    );
  };

  const renderFooter = () => {
    if (!footer) return null;
    
    return (
      <div className="border-t border-border-divider pt-4 mt-4">
        {footer}
      </div>
    );
  };

  const CardWrapper = interactive ? motion.div : 'div';

  return (
    <CardWrapper
      ref={ref}
      className={cardClass}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.02 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {renderImage()}
      <div className="space-y-4">
        {renderHeader()}
        <div className="space-y-2">
          {children}
        </div>
        {renderFooter()}
      </div>
    </CardWrapper>
  );
});

Card.displayName = 'Card';

// Card sub-components
Card.Header = ({ children, className, ...props }) => (
  <div className={`border-b border-border-divider pb-4 ${className || ''}`} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className, ...props }) => (
  <div className={`space-y-2 ${className || ''}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={`border-t border-border-divider pt-4 ${className || ''}`} {...props}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className, ...props }) => (
  <div className={`relative overflow-hidden rounded-t-lg ${className || ''}`} {...props}>
    <img
      src={src}
      alt={alt || 'Card image'}
      className="w-full h-48 object-cover"
    />
  </div>
);

export default Card;
