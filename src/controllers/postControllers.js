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

export const updatePost = async (token, id, title, body) =>
  axios.put(
    `${REACT_APP_SERVER_API}/post/${id}`,
    { title, body },
    {
      headers: { Authorization: token },
    }
  )

export const deletePost = async (token, id) =>
  axios.delete(`${REACT_APP_SERVER_API}/post/${id}`, {
    headers: { Authorization: token },
  })

export const getPost = async (id) =>
  await axios.get(`${REACT_APP_SERVER_API}/post/${id}`)

export const getUserPosts = async (userId, page) =>
  await axios.get(`${REACT_APP_SERVER_API}/user-posts/${userId}?page=${page}`)

export const searchQuery = async (keyword, page) =>
  axios.post(`${REACT_APP_SERVER_API}/searchQuery?page=${page}`, { keyword })
