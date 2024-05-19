import React from 'react';
import styles from './Dota.module.css'
import { Banner1 } from '../../modules/DotaPage/Banner1.tsx';
import { Banner2 } from '../../modules/DotaPage/Banner2.tsx';
import { Banner3 } from '../../modules/DotaPage/Banner3.tsx';

export const Dota: React.FC = () => {

    return (
    
        <div className={styles.dotapage}>
            <Banner1 />
            <Banner2 />
            <Banner3 />
        </div>

    )   
}