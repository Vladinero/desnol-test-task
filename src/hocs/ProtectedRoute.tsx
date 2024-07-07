'use client';
import { ReactNode, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useCookies} from "react-cookie"

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [cookies] = useCookies(['isAuth']);
  const isAuth = cookies.isAuth
  const router = useRouter();

  useLayoutEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default ProtectedRoute;
