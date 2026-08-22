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
  const desktopTop = topOffset + index * itemStackDistance;
  const mobileTop = 65 + index * 12;
  const isLast = index === totalItems - 1;
  const combinedClassName = `${itemClassName} ${className}`.trim();

  return (
    <div
      className={`scroll-stack-card sticky transition-all duration-300 ${
        isLast ? 'mb-10' : 'mb-20 sm:mb-32 lg:mb-44'
      } ${combinedClassName}`}
      style={
        {
          '--sticky-top': `${mobileTop}px`,
          top: `var(--sticky-top)`,
          zIndex: (index + 1) * 10,
        } as React.CSSProperties
      }
    >
      <style>{`
        @media (min-width: 768px) {
          .scroll-stack-card:nth-child(${index + 1}) {
            --sticky-top: ${desktopTop}px !important;
          }
        }
      `}</style>
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
    <div className={`scroll-stack-wrapper relative w-full pb-20 ${className}`.trim()}>
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
