import React from 'react';
import styles from './CarouselItem.module.css'



export interface CarouselItemProps {
    image: JSX.Element
    name: string
}

 


export const CarouselItem: React.FC<CarouselItemProps> = ({image, name}: CarouselItemProps) => {
    


    return (
    
        <div className = {styles.wrapper}>
            <div className= {styles.container} style = {{backgroundImage: `url(${image})`}}>
                <text className= {styles.title}>{name}</text>
            </div>
        </div>

    )   
}