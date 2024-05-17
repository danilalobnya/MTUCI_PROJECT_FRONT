import axios from 'axios'

export interface LogInApiProps {
        name: string
        password: string
}

export const LogInApi = (props: LogInApiProps) => {
    axios.post('api/token/refresh', {
        name: props.name,
        password: props.password,
    })
    .then(response => {
        if (response.status === 200) return 
            localStorage.setItem('accessToken', response.data.access)

            localStorage.setItem('refreshToken', response.data.refresh)
    })

    .catch(error => console.error(error))

}