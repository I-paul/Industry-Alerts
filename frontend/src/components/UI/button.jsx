import React from 'react';

const variantClasses = {
  primary: 'bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]',
  secondary: 'bg-[var(--btn-secondary-bg)] text-white hover:bg-[var(--btn-primary-hover)]',
  hamburger: 'bg-[var(--btn-primary-bg)] hover:bg-[var(--brand-accent)] text-white text-bold md:hidden',
  outline: 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50',
};

function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;