import axios from 'axios'
const { REACT_APP_SERVER_API } = process.env

export const getPosts = async (page) =>
  await axios.get(`${REACT_APP_SERVER_API}/posts?page=${page}`)

export const getUnconfirmed = async (page, token) =>
  await axios.get(`${REACT_APP_SERVER_API}/unconfirmed-posts?page=${page}`, {
    headers: {
      Authorization: token,
    },
  })

export const getDenied = async (page, token) =>
  await axios.get(`${REACT_APP_SERVER_API}/denied-posts?page=${page}`, {
    headers: {
      Authorization: token,
    },
  })

export const getConfirmed = async (page) =>
  await axios.get(`${REACT_APP_SERVER_API}/confirmed-posts?page=${page}`)

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

export const getUserPosts = async (userId, page, limit) =>
  await axios.get(
    `${REACT_APP_SERVER_API}/user-posts/${userId}?page=${page}&limit=${limit}`
  )

export const getAllUserPosts = async (userId, page, limit) =>
  await axios.get(
    `${REACT_APP_SERVER_API}/all-user-posts/${userId}?page=${page}&limit=${limit}`
  )

export const searchQuery = async (keyword, page) =>
  axios.post(`${REACT_APP_SERVER_API}/searchQuery?page=${page}`, { keyword })

export const likePost = async (postId, token) =>
  axios.put(
    `${REACT_APP_SERVER_API}/like/${postId}`,
    {},

    {
      headers: {
        Authorization: token,
      },
    }
  )

export const unlikePost = async (postId, token) =>
  axios.put(
    `${REACT_APP_SERVER_API}/unlike/${postId}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  )

export const changeStatus = async (token, postId, status) =>
  axios.put(
    `${REACT_APP_SERVER_API}/changeStatus/${postId}`,
    { status },
    {
      headers: { Authorization: token },
    }
  )
