import * as React from 'react';
import { useContext } from 'react'
import { ColorAIContext } from '../../context/ColorAIProvider'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { Button, Stack } from '@mui/material';
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import "./navbarsuperior.scss";

const settings = ['Perfil', 'Cerrar sesión'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user, setIsLogged, setUser} = useContext(ColorAIContext)

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/landingProfessional")
  };
  const handleCloseNavMenu1 = () => {
    setAnchorElNav(null);
    navigate("")
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate("/oneUserProfessional")
  };
  const isLogOut = () => {
    window.localStorage.removeItem("token")
    setAnchorElUser(null);
    setIsLogged(false)
    setUser()
    navigate('/')
    }

  return (
    <AppBar position="sticky" style={{backgroundColor: "#21121b"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/logocasa.png" alt="logo que te lleva a home" />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <img className="iconosnavbar " src="../../../../assets/images/iconosnavbar/agenda.png" alt="agenda para coger citas" />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/buscadortelas.png" alt="buscador de telas" />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/calendario.png" alt="calendario de citas" />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/mensaje.png" alt="mensaje" />
                </MenuItem>
            </Menu>
          </Box>
          {/* LOGO */}
          <IconButton  onClick={()=> navigate("/landingProfessional")}  sx={{ mr: 5, m:1 }}>
            <img className='logo ' src="../../../../assets/images/iconosnavbar/logo.png" alt="icono de colorAI" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton onClick={handleCloseNavMenu}
            >
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/logocasa.png" alt="logo que te lleva a home" />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu}
            >
              <img className="iconosnavbar " src="../../../../assets/images/iconosnavbar/agenda.png" alt="agenda para coger citas" />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu1}
            >
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/buscadortelas.png" alt="logo que te lleva a colorimetria" />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu}
            >
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/calendario.png" alt="calendario de citas" />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu}
            >
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/mensaje.png" alt="mensaje" />
            </IconButton>
          </Box>
                <Button
                  onClick={() => navigate("/search")}
                  variant="contained"
                  sx={{ p: 2 }}
                  style={{ backgroundColor: "#cd65a7" }}
                  endIcon={<PersonSearchIcon />}
                > <span className='buscar-cliente'>BUSCAR CLIENTE</span></Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                 <Avatar alt={user?.name} src={`/images/user/${user?.avatar}`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={isLogOut}>
                  <Typography textAlign="center">Cerrar sesión</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;