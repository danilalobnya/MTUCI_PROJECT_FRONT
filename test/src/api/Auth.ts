import axios from 'axios'

export interface AuthApiProps {
        name: string
        email: string
        password: string
        password2: string
}

export const AuthApi = (props: AuthApiProps) => {
    axios.post('api/v1/registr', {
        name: props.name,
        email: props.email,
        password: props.password,
        password2: props.password2,
    })
    .then(response => {
        if (response.status === 201) return 
            localStorage.setItem('accessToken', response.data.access)

            localStorage.setItem('refreshToken', response.data.refresh)
    })

    .catch(error => console.error(error))

}