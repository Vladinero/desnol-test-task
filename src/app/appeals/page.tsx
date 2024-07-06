import Header from "@/components/Header/Header";
import Container from "@mui/material/Container";
import {AppealFilter} from "@/components/AppealsFilter/AppealsFilter";
import {AppealsTable} from "@/components/AppealsTable";
import { data } from '@/data'

export default function Appeals() {


    return (
    <>
      <Header isAuth={true}/>
       <Container maxWidth="xl" sx={{pt: 2}}>
         <AppealFilter />
         <AppealsTable data={data}/>
       </Container>
    </>
    )
}
