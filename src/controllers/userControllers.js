import axios from 'axios'
const { REACT_APP_SERVER_API } = process.env

export const userProfile = async (token) =>
  axios.get(`${REACT_APP_SERVER_API}/user-profile`, {
    headers: { Authorization: token },
  })

export const updateDetails = async (id, token, username, about) =>
  axios.post(
    `${REACT_APP_SERVER_API}/update-details/${id}`,
    { username, about },
    {
      headers: { Authorization: token },
    }
  )

export const publicProfile = async (username) =>
  axios.get(`${REACT_APP_SERVER_API}/public-profile/${username}`)

export const getUsername = async (email) =>
  axios.post(`${REACT_APP_SERVER_API}/forgot-username`, { email })

export const getUsers = async (page, limit) =>
  axios.get(`${REACT_APP_SERVER_API}/users?page=${page}&limit=${limit}`)

export const forgotPasswordEmail = async (email) =>
  axios.post(`${REACT_APP_SERVER_API}/forgot-password`, { email })

export const resetPasswordValidation = async (resetPasswordToken) =>
  axios.get(`${REACT_APP_SERVER_API}/password-reset/${resetPasswordToken}`)

export const resetPasswordAction = async (
  password,
  confirmPassword,
  resetPasswordToken
) =>
  axios.post(`${REACT_APP_SERVER_API}/password-reset`, {
    password,
    confirmPassword,
    resetPasswordToken,
  })

export const banUser = async (token, userId, banned) =>
  axios.put(
    `${REACT_APP_SERVER_API}/ban/${userId}`,
    { banned },
    {
      headers: { Authorization: token },
    }
  )
