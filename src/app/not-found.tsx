import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default  function NotFound() {
  return (
    <Box sx={{display: 'grid', placeContent: 'center', height: '100vh'}}>
      <Typography variant="h3">404</Typography>
      <Typography variant="h5">Страница не найдена!</Typography>
    </Box>
  )
}
