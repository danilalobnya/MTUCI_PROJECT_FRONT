import React from 'react';
import styles from './RegistrationForm.module.css'
import { LogIn } from './Components/LogIn/LogIn.tsx';
import { SignIn } from './Components/SignIn/SignIn.tsx';
import { registrationSlice } from '../../store/reducers/RegistrationSlice.ts';
import { useAppDispatch } from '../../hooks/redux.ts';
import useRemoveForm from '../../hooks/removeForm.ts';


export const RegistrationForm: React.FC = () => {

    const {regClose} = registrationSlice.actions
    const dispatch = useAppDispatch()

    let ref = React.createRef<HTMLDivElement>()
    useRemoveForm(ref, () => dispatch(regClose()))

    return (
    
        <div className = {styles.wrapper}>
            <div className= {styles.container} ref  = {ref}>
                <SignIn/>
                <LogIn/>
            </div>
        </div>

    )
}