import instance from './api'

const newUser = (
    userData
) => {
    return instance.post('/sign-up', userData)
}

export default newUser