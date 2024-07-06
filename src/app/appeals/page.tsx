import Container from "@mui/material/Container";

import Header from "@/components/Header/Header";
import {AppealFilter} from "@/components/AppealsFilter/AppealsFilter";
import {AppealsTable} from "@/components/AppealsTable";
import {data} from '@/data'
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "itilium | Страница обращений",
  description: "Страница сервисных обращений itilium",
};

export default function Appeals() {

  return (
    <>
      <Header isAuth={true}/>
      <Container maxWidth="xl" sx={{pt: 2}}>
        <AppealFilter/>
        <AppealsTable data={data}/>
      </Container>
    </>
  )
}
