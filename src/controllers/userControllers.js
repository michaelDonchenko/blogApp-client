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
