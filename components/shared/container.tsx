import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-8 xl:px-14  ${className}`}>
      {children}
    </div>
  );
}

export default Container;
