'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ErrorBoundary () {
  return (
    <Box sx={{display: 'grid', placeContent: 'center', height: '100vh'}}>
      <Typography variant="h3" component="div">
        Ошибка просмотра страницы обращений!
      </Typography>
    </Box>
  );
}
