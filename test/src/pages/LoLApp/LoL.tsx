import React from 'react';
import styles from './LoL.module.css'
import { Header } from '../../modules/Header/Header.tsx';
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx';
import {useAppSelector } from '../../hooks/redux.ts';

export const LoL: React.FC = () => {
    
    const {display} = useAppSelector(state => state.registrationReducer)

    return (
    
        <div className = {styles.wrapper}>
            {display ? <RegistrationForm/> : ''}
            <Header/>
        </div>

    )   
}