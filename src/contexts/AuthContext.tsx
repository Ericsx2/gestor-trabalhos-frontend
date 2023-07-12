'use client';

import api from '@/api';
import axios from 'axios';
import { ReactNode, createContext, useState } from 'react';

interface UserData {
  id: string;
  name: string;
  role: string;
  registration: string;
}

interface AuthContextProps {
  user?: UserData;
  token?: string;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
}

interface SignInData {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<UserData>();
  const [token, setToken] = useState('');

  async function signIn({ email, password }: SignInData) {
    try {
      const { data } = await axios.post('http://localhost:3333/login', {
        email,
        password,
      });
      setUser(data.user);
      setToken(data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (e) {
      console.log(e);
    }
  }

  async function signOut() {
    setUser(undefined);
    setToken('');
    api.defaults.headers.common['Authorization'] = undefined;
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
