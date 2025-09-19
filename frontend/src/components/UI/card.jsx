import { motion } from 'framer-motion';

const variantClasses = {
	primary: 'bg-[var(--card-bg-2)] text-white hover:bg-[var(--link-active)]  border-2 border-[var(--brand-accent)]',
};

function Card({ children, variant = 'primary', ...props }) {
	return (
		<motion.a
			className={`px-1 py-2 md:px-2 md:py-4 my-2 mx-3  flex items-center rounded-2xl transition-colors duration-200 focus:outline-none ${variantClasses[variant]}`}
			{...props}
			initial={{ y: 25, opacity: 0 }}
			whileHover={{ y: -5 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			target='_blank'
		>
			{children}
		</motion.a>
	);
}

export default Card;