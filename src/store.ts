import { atom } from 'jotai'

export const sidebarToggle = atom(false)

export const isAuth = atom(false)

export const setSplash = atom('splash')

export const authForm = atom({
  email: '',
  username: '',
  password: ''
})
