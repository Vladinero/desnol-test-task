import Header from "@/components/Header/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface IAppealProps {
  params: {
    appealId: number
  }
}

export default function Appeal({params}: IAppealProps) {
  const {appealId} = params
  return (
    <>
      <Header isAuth={true}/>
      <Container maxWidth="xl" sx={{pt: 2}}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Box>
        {`Appeal ${appealId} page`}
        </Box>
      </Container>
    </>
  )
}
