import axios from 'axios'

export interface AuthApiProps {
    Data: {
        name: string
        email: string
        password: string
        password2: string
    }
}

export const AuthApi = (props: AuthApiProps) => {
    axios.post('api/v1/registr', {
        name: props.Data.name,
        email: props.Data.email,
        password: props.Data.password,
        password2: props.Data.password2,
    })
    .then(response => {
        if (response.status === 201) return 
            localStorage.setItem('accessToken', response.data.access)

            localStorage.setItem('refreshToken', response.data.refresh)
    })

    .catch(error => console.error(error))

}