import React, { useEffect, useState, useRef } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = '', 
  id, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, delay]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`transition-all duration-[2000ms] ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-95'
      } ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;