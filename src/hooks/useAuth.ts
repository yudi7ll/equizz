import { useEffect, useState } from 'react'

interface User {
  isLoggedIn?: boolean
  username?: string
  token?: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem('user'))
  )

  return { user, setUser }
}
