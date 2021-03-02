import React, { createContext, useReducer } from 'react'

//reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

//state
const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null,
}

//create context
const AuthContext = createContext()

//context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const value = { state, dispatch }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//export
export { AuthContext, AuthProvider }
