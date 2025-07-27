import { motion} from "framer-motion"

const variantClasses ={
    Navbar : 'text-white font-[1rem] font-bold hover:scale-[1.2] hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] duration-[0.5s] ease-in-out transition  rounded-r-xl',
    Headings : '',

}

export default function Link({children , variant = 'Headings', ...props}){
    return(
        <a className={`p-2 cursor-pointer ${variantClasses[variant]}`} {...props} target="blank">
            {children}
        </a>
    )
}