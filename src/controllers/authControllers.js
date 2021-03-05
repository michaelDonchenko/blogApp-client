import axios from 'axios'
const { REACT_APP_SERVER_API } = process.env

export const register = async (password, email, username) =>
  await axios.post(`${REACT_APP_SERVER_API}/register`, {
    password,
    email,
    username,
  })

export const login = async (username, password) =>
  await axios.post(`${REACT_APP_SERVER_API}/login`, {
    username,
    password,
  })
