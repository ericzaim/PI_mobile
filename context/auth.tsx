import React, { createContext, useContext, useState } from 'react'
import { router } from 'expo-router'
import { getUser } from '../app/api'

export interface IUser {
  email: string
  senha: string
}

interface IAuthContext {
  user: IUser
  setUser: (user: IUser) => void
  //handleLogin: (user: IUser) => void
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({email: '', senha: ''})

  /*function handleLogin(user: IUser) {
    getUser(user).then(response => {
      if (response && response.ok) {
        if (response.data.email === user.email && response.data.senha === user.senha) {
          router.push('/loja')
        }else {
          return alert('Invalid email or password')
        }
      } else {
      alert('User not found');
      }
    }).catch(error => {
      console.error('Erro ao verificar usuário:', error);
      alert('Ocorreu um erro. Tente novamente mais tarde.');
    });
  }*/

  return (
    <AuthContext.Provider value={{ user, /*handleLogin,*/ setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}