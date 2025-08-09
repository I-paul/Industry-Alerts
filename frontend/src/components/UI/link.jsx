
const variantClasses ={
    Navbar : 'text-white text-lg font-bold hover:scale-[1.1]  hover:text-[var(--text-tertiary)] duration-[0.5s] ease-in-out transition  rounded-r-xl',
    headings : 'text-[var(--text-tertiary)]  hover:text-white m-3 text-[12px] md:text-xl',

}

export default function Link({children , variant = 'Headings', ...props}){
    return(
        <a className={`p-2 cursor-pointer ${variantClasses[variant]}`} {...props} target="blank">
            {children}
        </a>
    )
}