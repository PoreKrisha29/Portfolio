import React from 'react';

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemStackDistance?: number;
  topOffset?: number;
}

export const ScrollStackItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  index?: number;
  topOffset?: number;
  itemStackDistance?: number;
}> = ({ children, className = '', index = 0, topOffset = 110, itemStackDistance = 20 }) => {
  return (
    <div
      className={`scroll-stack-card sticky transition-all duration-300 ${className}`}
      style={{
        top: `${topOffset + index * itemStackDistance}px`,
        zIndex: index + 1,
        marginBottom: '6rem',
      }}
    >
      {children}
    </div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemStackDistance = 20,
  topOffset = 110,
}) => {
  const items = React.Children.toArray(children);

  return (
    <div className={`scroll-stack-container relative w-full pb-20 ${className}`}>
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            key: child.key || index,
            index,
            itemStackDistance,
            topOffset,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ScrollStack;
