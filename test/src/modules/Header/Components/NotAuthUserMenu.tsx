import React from 'react';
import styles from './Components.module.css'
import { registrationSlice } from '../../../store/reducers/RegistrationSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';


export const NotAuthUserMenu: React.FC = () => {

    const {regOpen} = registrationSlice.actions
    const dispatch = useAppDispatch()

    return (
    
            <div className = {styles.userMenuContainer}>
                <button className={styles.authBtn} onClick={() => dispatch(regOpen())}>Войти</button>
            </div>

    )
}