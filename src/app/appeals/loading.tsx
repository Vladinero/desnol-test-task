import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );
}
