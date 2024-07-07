'use client'
import {type ChangeEvent, useState} from 'react';
import Link from "next/link";

import {ILoginData} from "@/models";
import {useAuth} from "@/hooks";

import Container from "@mui/material/Container";
import {Button, Checkbox, FormControlLabel, InputAdornment, TextField} from "@mui/material";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {Stack} from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({login: '', password: ''});
  const {authError, login} = useAuth()

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  };
  const handleLoginData = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData(prev => ({...prev, [name]: value}))
  };
  const handleAuth = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(loginData)
  }

  return (<>
      <Container maxWidth="xl">
        <form onSubmit={handleAuth} noValidate>
          <Stack direction="column" gap={2}>
            <Typography variant="h4" component="h1" gutterBottom>Вход в сервис</Typography>
            <TextField
              label='Логин'
              type='text'
              name='login'
              required
              value={loginData.login}
              onChange={handleLoginData}
              autoComplete='one-time-code'
              helperText={authError ? 'Проверьте логин' : 'Введите логин'}
              error={authError}
            />
            <TextField
              label='Пароль'
              type={`${showPassword ? 'text' : 'password'}`}
              name='password'
              required
              value={loginData.password}
              onChange={handleLoginData}
              autoComplete='one-time-code'
              helperText={authError ? 'Проверьте пароль' : 'Введите пароль'}
              InputProps={{
                endAdornment: <InputAdornment position="end"><IconButton
                  onClick={handleShowPassword}><VisibilityOffOutlinedIcon/></IconButton></InputAdornment>,
              }}
              error={authError}
            />
            <FormControlLabel control={<Checkbox/>} label='Запомнить меня'/>
            <Button type='submit' variant="contained">Войти</Button>
            <Link href='/recovery' className="recovery-link">Забыли пароль?</Link>
          </Stack>
        </form>
      </Container>
    </>
  )
}
