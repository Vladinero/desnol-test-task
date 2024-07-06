import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "@/components/Header/Header";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "itilium | Страница восстановления пароля",
  description: "Восстановление пароля на портале itilium",
};

export default function PasswordRecovery() {

  return (
    <Container maxWidth="xl">
      <Header isAuth={false}/>
      <Typography variant="h3" component="h1">Страница восстановления пароля</Typography>
    </Container>
  );
}
