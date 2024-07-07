'use client'
import Container from "@mui/material/Container";

import Header from "@/components/Header/Header";
import {AppealFilter} from "@/components/AppealsFilter/AppealsFilter";
import {AppealsTable} from "@/components/AppealsTable";
import ProtectedRoute from "@/hocs/ProtectedRoute";

import {data} from '@/data'

export default function Appeals() {

  return (
   <ProtectedRoute>
      <Header isAuth={true}/>
      <Container maxWidth="xl" sx={{pt: 2}}>
        <AppealFilter/>
        <AppealsTable data={data}/>
      </Container>
    </ProtectedRoute>
  )
}
