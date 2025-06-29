import React from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = '', 
  id 
}) => {
  return (
    <div
      id={id}
      className={className}
    >
      {children}
    </div>
  );
};

export default SectionTransition;