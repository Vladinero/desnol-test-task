
'use client';
import Header from "@/components/Header/Header";
import Container from "@mui/material/Container";
import {AppealFilter} from "@/components/AppealsFilter/AppealsFilter";

export default function Appeals() {
    return (
    <>
      <Header isAuth={true}/>
       <Container maxWidth="xl" sx={{pt: 2}}>
         <AppealFilter />
       </Container>
    </>
    )
}
