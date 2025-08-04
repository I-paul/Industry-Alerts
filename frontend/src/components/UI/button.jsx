
const variantClasses = {
  primary: 'rounded bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]',
  secondary: 'rounded-r-lg bg-[var(--btn-secondary-bg)] text-white hover:bg-[var(--btn-accent-hover)]',
  hamburger: 'rounded bg-[var(--btn-primary-bg)] hover:bg-[var(--brand-accent)] text-white text-bold md:hidden',
  outline: 'rounded font-bold border  text-blue-500 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)]',
};

function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`px-2 py-1  transition-colors duration-200 focus:outline-none ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;