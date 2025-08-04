
const variantClasses ={
    Navbar : 'text-white text-lg font-bold hover:scale-[1.1]  hover:text-[var(--brand-accent)] duration-[0.5s] ease-in-out transition  rounded-r-xl',
    headings : 'text-[var(--text-tertiary)]  text-[1rem] hover:text-white',

}

export default function Link({children , variant = 'Headings', ...props}){
    return(
        <a className={`p-2 cursor-pointer ${variantClasses[variant]}`} {...props} target="blank">
            {children}
        </a>
    )
}