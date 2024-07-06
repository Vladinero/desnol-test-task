'use client'
import {type ChangeEvent, useState} from 'react';
import {useRouter} from 'next/navigation'

import {ILoginData} from "@/models/loginModel";
import AuthService from "@/services/AuthService";

import Link from "next/link";
import Container from "@mui/material/Container";
import {Button, Checkbox, FormControlLabel, InputAdornment, TextField} from "@mui/material";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {Stack} from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({login: '', password: ''});
  const [showError, setShowError] = useState<boolean>(false);
  const {login, password} = loginData;
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  };
  const handleLoginData = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData(prev => ({...prev, [name]: value}))
  };
  const handleAuth = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    AuthService.login(loginData);
    if (AuthService.checkAuth()) {
      router.push('/appeals');
    } else {
      setShowError(true)
    }
  }

  return (
    <Container maxWidth="xl">
      <form onSubmit={handleAuth} noValidate>
        <Stack direction="column" gap={2}>
          <Typography variant="h4" component="h1" gutterBottom>Вход в сервис</Typography>
          <TextField
            label='Логин'
            type='text'
            name='login'
            required
            value={login}
            onChange={handleLoginData}
            autoComplete='one-time-code'
            helperText={showError ? 'Проверьте логин' : 'Введите логин'}
            error={showError}
          />
          <TextField
            label='Пароль'
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            required
            value={password}
            onChange={handleLoginData}
            autoComplete='one-time-code'
            helperText={showError ? 'Проверьте пароль' : 'Введите пароль'}
            InputProps={{
              endAdornment: <InputAdornment position="end"><IconButton
                onClick={handleShowPassword}><VisibilityOffOutlinedIcon/></IconButton></InputAdornment>,
            }}
            error={showError}
          />
          <FormControlLabel control={<Checkbox/>} label='Запомнить меня'/>
          <Button type='submit' variant="contained">Войти</Button>
          <Link href='/recovery' className="recovery-link">Забыли пароль?</Link>
        </Stack>
      </form>
    </Container>
  )
}
