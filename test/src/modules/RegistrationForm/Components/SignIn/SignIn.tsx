import React from "react";
import styles from  './SignIn.module.css'

import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux.ts";
import { formSlice } from "../../../../store/reducers/RegistrationFormSlice.ts";


export const SignIn: React.FC = () => {

    
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const {toogled} = useAppSelector(state => state.formReducer)
    const {swap} = formSlice.actions
    const dispatch = useAppDispatch()

    interface formData {
        name: string;
        email: string;
        password: string;
        password2: string;
    }

    const [formData, setFormData] = React.useState<formData>({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(formData => ({...formData, [name]: value}))
    }

    const resetForm = () => {
        dispatch(swap())
        setFormData(prevState => ({
            name: "",
            email: "",
            password: "",  
            password2: ""
        }))
    }




    return (

        <div className={styles.wrapper} style = {{position: 'absolute'}}> 

            <div className={styles.toogleMenu} style = {{opacity: toogled ? '1' : '0'}}>
                <div className={styles.toogle} style = {{left: toogled ? '0%' : '100%'}}>
                </div>
            </div>

        <div className={styles.logInCaontainer}>
            <div className={styles.logIn} style = {{right: toogled ? '0%' : '100%'}}>
                <span className= {styles.title}>Рады видеть вас!</span>
                <input className={styles.inputName} name = "name" value={formData.name} onChange={handleChange} placeholder='Name'></input>
                <input className={styles.inputName} name = "email" value={formData.email} onChange={handleChange} placeholder='Email'></input>
                <div className = {styles.inputGroup}>
                    <input className={styles.inputPassword} name = "password" value={formData.password} onChange={handleChange}
                     type = {show ? '' : 'password'} placeholder="Password"></input>
                    <button className = {styles.showBtn} onClick={handleClick}>{show ? <IoIosEyeOff /> : <IoIosEye />}</button>
                </div>
                <div className = {styles.inputGroup}>
                    <input className={styles.inputPassword} name = "password2" value={formData.password2} onChange={handleChange} 
                    type = "password" placeholder="Repeat Password"></input>
                </div>
                <span className={styles.logInLink} onClick={() => resetForm()}>Уже есть аккаунт?</span>
                <button className={styles.logInBtn}>Создать</button>
            </div>к
        </div>   

        </div>

    )

}