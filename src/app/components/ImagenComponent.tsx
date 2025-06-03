
import React from 'react';

type ImgProps = {
    text: 'delete' | 'update' 
    subtitle?: string
    alt?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,  'onClick'>;




function ImagenComponent({ title, subtitle, ...rest }: ImgProps) {
    return  (
        <figure>

            <button {...rest} /> 
            <figcaption>
                {title} - {subtitle}
                </figcaption>
        </figure>
     )
}

export default ImagenComponent;