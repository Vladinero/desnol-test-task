import ProtectedRoute from "@/hocs/ProtectedRoute";

import Header from "@/components/Header/Header";
import Container from "@mui/material/Container";
import DetailCard from "@/components/DetailCard/DetailCard";
import {data} from '@/data'
import {Stack} from "@mui/system";
import {Alert} from "@mui/material";
import {AppealFilter} from "@/components/AppealsFilter";

interface IAppealProps {
  params: {
    appealId: string
  }
}

export default function Appeal({params}: IAppealProps) {
  const {appealId} = params
  const appealDetails =
    data.find((appeal) => {

      return appeal.id === parseInt(appealId)
    })

  return (
    <ProtectedRoute>
      <Header isAuth={true}/>
      <Container maxWidth="xl" sx={{pt: 2}}>
        <AppealFilter isDetailPage/>
        {appealDetails ?
          <Stack direction="column" spacing={2}>
            <DetailCard info={appealDetails}/>
            <Alert severity="info" sx={{maxWidth: {sx: '100%', md: '50%'}}}>
              Если остались вопросы, пожалуйста. создайте новое обращение.</Alert>
          </Stack> :
          null
        }
      </Container>
    </ProtectedRoute>
  )
}
