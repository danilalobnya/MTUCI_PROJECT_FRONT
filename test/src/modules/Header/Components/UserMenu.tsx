import React from 'react';
import styles from './Components.module.css'
import { RiSettings3Fill } from "react-icons/ri";
import { Boop } from '../../../helpers/settingIconBoop.tsx';

export const UserMenu: React.FC = () => {

    const lvl = localStorage.getItem('lvl')

    return (
    
            <div className = {styles.userMenuContainer}>
                <div className={styles.avatar}/>
                <div className={styles.userLevel}><text>12</text></div>
                {Boop({rotation: 180, timing: 400, children: <RiSettings3Fill className={styles.settingBtn}></RiSettings3Fill >})}
            </div>

    )
}