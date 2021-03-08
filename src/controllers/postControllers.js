import axios from 'axios'
const { REACT_APP_SERVER_API } = process.env

export const getPosts = async (page) =>
  await axios.get(`${REACT_APP_SERVER_API}/posts?page=${page}`)

export const newPost = async (token, title, body) =>
  axios.post(
    `${REACT_APP_SERVER_API}/post`,
    { title, body },
    {
      headers: { Authorization: token },
    }
  )
