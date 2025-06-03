'use client'
import { ComponentPropsWithoutRef } from "react"

type BtnProps = {
    title: 'send' | 'reset' | 'update' | 'delete'
    subtitle?: string
    styleSpan?:string
} & ComponentPropsWithoutRef<'button'>

export default function ButtonComponent({title, subtitle, onClick, children, ...rest}:BtnProps) {
    //rest is: id, children, style, className, onClick, onChange... que seran marcadas aca pero definidas en <Padre.
    //No fue necesario pasar cada: id, children, style, className.. al BtnProps para que <Padre las definiera
    //solo paso ...rest desestructurada al component como parte del BtnProps

    return(
        <button
            style={{ color:'red', ...rest.style}} 
            className={rest.className} //tengo que pasarlo sino, <Padre NO podra asignarle un evento a este manejador.
            onClick={onClick} //tengo que pasarlo sino, <Padre NO podra asignarle un evento a este manejador.
            >
            <span 
            //!style={styleSpan}; NO PUEDO, porque solo hice ComponentPropsWithoutRef<'button'> para el componente no sus JSX Ele
            //le paso todos los atributos HTML, eventos y PROPS costumisables que deseo que padre defina, 
            // o termine de definir {aca, aca, ...alla}
            >{title}- {subtitle} </span> 
           {/* {rest.children} //! innecesario el .rest, pues la pase por parametro, OJO, sin nevesidad de desgloce en el type*/}
            {children}
        </button>
    )
}