import React, { createContext, useContext, useState } from 'react'
import { router } from 'expo-router'

interface IUser {
  email: string
  senha: string
}

interface IAuthContext {
  user: IUser
  setUser: (user: IUser) => void
  handleLogin: () => void
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({email: '', senha: ''})

  function handleLogin() {
    if(user && user.email === 'admin' && user.senha === 'admin') {
      router.push('loja')
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}