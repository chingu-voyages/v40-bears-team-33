import axios from 'axios'

interface UserForm {
  email: string
  password: string
  username?: string
}
export const authQueries = {
  registerUser: (data: UserForm) => {
    axios
      .post(`BASE_URL/auth/register`, data)
      .then(res => {
        console.log(res)
        // toast for sucessful registration
      })
      .catch(err => {
        console.warn(err)
        // toast for error in registration
      })
  },
  signInUser: (data: UserForm) => {
    axios
      .post(`BASE_URL/auth/signin`, data)
      .then(res => {
        console.log(res)
        // toast for successful sign in
      })
      .catch(err => {
        console.warn(err)
        // toast for error in sign in
      })
  }
}
