import type {Metadata} from "next";

import Box from "@mui/material/Box";

import {LoginForm} from "@/components/LoginForm";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "itilium | Страница авторизации",
  description: "Авторизация на портале сервисных обращений itilium",
};

export default function Home() {
  return (
    <>
      <Header isAuth={false}/>
      <Box
        component="main"
        bgcolor="grey.50"
        sx={{display: 'grid', placeContent: 'center', p: 3, minHeight: 'calc(100% - 64px)'}}
      >
        <LoginForm/>
      </Box>
    </>
  );
}
