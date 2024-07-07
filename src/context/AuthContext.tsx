'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import {ILoginData} from "@/models";
import {useCookies} from "react-cookie"

interface AuthContextType {
  isAuth: boolean;
  authError: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

interface User {
  login: string;
  password: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authError, setAuthError] = useState<boolean>(false);

  const [cookies, setCookie, removeCookie] = useCookies(['isAuth']);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = cookies.isAuth;
    if (loggedInUser) {
      setIsAuth(true);
    }
  }, []);

  const login = ({login, password}: ILoginData) => {
    const isValidUserData =
      login === 'gavrilov' && password === '111aaa' ||
      login === 'fedorov' && password === '222bbb';

    if (isValidUserData) {
      setCookie('isAuth', true, {
        path: '/',
        domain: `localhost`,
        maxAge: 3600,
    })
      setIsAuth(true);
      router.push('/appeals');
    } else {
      setAuthError(true)
    }
  };

  const logout = () => {
    removeCookie('isAuth');
    setIsAuth(false);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isAuth, authError, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};