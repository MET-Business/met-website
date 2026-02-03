import type { CSSProperties, ReactNode } from 'react';
import useInView from '../hooks/useInView';

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.12);

  const style: CSSProperties = {
    animationDelay: delay ? `${delay}ms` : undefined,
  };

  return (
    <div
      ref={ref}
      className={`animate-fadeInUp transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={isVisible ? style : { opacity: 0 }}
    >
      {children}
    </div>
  );
}

