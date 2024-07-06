import {LoginForm} from "@/components/LoginForm/LoginForm";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      component="main"
      bgcolor="grey.50"
      sx={{ display: 'grid', placeContent: 'center', p: 3, minHeight: 'calc(100% - 64px)' }}
    >
     <LoginForm />
    </Box>
  );
}
