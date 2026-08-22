import React from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  className?: string;
  index?: number;
  totalItems?: number;
  topOffset?: number;
  itemStackDistance?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  className = '',
  index = 0,
  totalItems = 5,
  topOffset = 95,
  itemStackDistance = 24,
}) => {
  const stickyTop = topOffset + index * itemStackDistance;
  const isLast = index === totalItems - 1;
  const combinedClassName = `${itemClassName} ${className}`.trim();

  return (
    <div
      className={`scroll-stack-card sticky transition-all duration-300 ${
        isLast ? 'mb-12' : 'mb-32 sm:mb-44 lg:mb-56'
      } ${combinedClassName}`}
      style={{
        top: `${stickyTop}px`,
        zIndex: (index + 1) * 10,
      }}
    >
      {children}
    </div>
  );
};

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  topOffset?: number;
  itemStackDistance?: number;
  itemDistance?: number;
  itemScale?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  useWindowScroll?: boolean;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  topOffset = 95,
  itemStackDistance = 24,
}) => {
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  return (
    <div className={`scroll-stack-wrapper relative w-full pb-24 ${className}`.trim()}>
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            key: child.key || index,
            index,
            totalItems,
            topOffset,
            itemStackDistance,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ScrollStack;
