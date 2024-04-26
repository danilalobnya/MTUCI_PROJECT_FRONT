import axios from 'axios'

export interface AuthApiProps {
    Data: {
        name: string
        password: string
    }
}

export const AuthApi = (props: AuthApiProps) => {
    axios.post('api/token/refresh/', {
        name: props.Data.name,
        password: props.Data.password,
    })
    .then(response => {
        if (response.status === 200) return 
            localStorage.setItem('accessToken', response.data.access)

            localStorage.setItem('refreshToken', response.data.refresh)
    })

    .catch(error => console.error(error))

}