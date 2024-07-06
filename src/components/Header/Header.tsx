'use client'
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Stack} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';

export default function Header({isAuth}: {isAuth: boolean}) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            itilium
          </Typography>

          {isAuth && <>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{display: 'flex', alignItems:  'center', gap: 2}}>
                  Уведомления
                  <Badge badgeContent={12} color="error"/>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Обращения</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Добавить обращение</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            itilium
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'center', gap: 10}}}>
            <Box>
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'flex', gap: 2}}
              >
                Уведомления
                <Badge badgeContent={12} color="error"/>
              </Button>
            </Box>
            <Box sx={{borderBottom: `4px solid`, borderBottomColor: 'secondary.main'}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                Обращения
              </Button>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              sx={{my: 2, color: 'white', display: {xs: 'none', md: 'flex'}, gap: 1}}
            >
              Новое обращение
            </Button>
            <Avatar
              alt="Gavrilov avatar"
              src="/static/images/avatar/2.jpg"
            />
          </Stack>
          </>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
