import { createContext, useState } from 'react'
import { TOKEN_POST } from './api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password })
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
