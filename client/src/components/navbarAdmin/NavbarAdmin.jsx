import React from "react";
import { useContext } from "react";
import { ColorAIContext } from "../../context/ColorAIProvider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Button, ButtonBase, ButtonGroup } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbaradmin.scss";

export const NavbarAdmin = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, setIsLogged, setUser } = useContext(ColorAIContext);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/homeAdmin");
  };
  const handleCloseNavMenu1 = () => {
    setAnchorElNav(null);
    navigate("/allProfessional");
  };
  const handleCloseNavMenu2 = () => {
    setAnchorElNav(null);
    navigate("/allClients");
  };
  const handleCloseNavMenu3 = () => {
    setAnchorElNav(null);
    navigate("/createForm");
  };
  const handleCloseNavMenu4 = () => {
    setAnchorElNav(null);
    navigate("/test");
  };
  const isLogOut = () => {
    window.localStorage.removeItem("token");
    setAnchorElUser(null);
    setIsLogged(false);
    setUser();
    navigate("/");
  };
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#21121B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <img
                  onClick={handleCloseNavMenu}
                  className="iconosnavbar"
                  src="../../../../assets/images/iconosnavbar/logocasa.png"
                  alt="logo que te lleva a home"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu1}>
                <img
                  className="iconosnavbar "
                  src="../../../../assets/images/iconosnavbar/agenda.png"
                  alt="agenda para coger citas"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu2}>
                <img
                  className="iconosnavbar"
                  src="../../../../assets/images/iconosnavbar/allclients.png"
                  alt="buscador de telas"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu3}>
                <img
                  className="iconosnavbar"
                  src="../../../../assets/images/iconosnavbar/approval.png"
                  alt="calendario de citas"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu4}>
                <img
                  className="iconosnavbar"
                  src="../../../../assets/images/iconosnavbar/file-backup.png"
                  alt="mensaje"
                />
              </MenuItem>
            </Menu>
          </Box>
          {/* LOGO */}
          <IconButton
            onClick={() => navigate("/homeAdmin")}
            sx={{ mr: 5, m: 1 }}
          >
            <img
              className="logo "
              src="../../../../assets/images/iconosnavbar/logo.png"
              alt="icono de colorAI"
            />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton onClick={handleCloseNavMenu}>
              <img
                className="iconosnavbar"
                src="../../../../assets/images/iconosnavbar/logocasa.png"
                alt="logo que te lleva a home"
              />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu1}>
              <img
                className="iconosnavbar "
                src="../../../../assets/images/iconosnavbar/agenda.png"
                alt="agenda para coger citas"
              />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu2}>
              <img
                className="iconosnavbar"
                src="../../../../assets/images/iconosnavbar/allclients.png"
                alt="logo que te lleva a colorimetria"
              />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu3}>
              <img
                className="iconosnavbar"
                src="../../../../assets/images/iconosnavbar/approval.png"
                alt="calendario de citas"
              />
            </IconButton>
            <IconButton onClick={handleCloseNavMenu4}>
              <img
                className="iconosnavbar"
                src="../../../../assets/images/iconosnavbar/alltests.png"
                alt="mensaje"
              />
            </IconButton>
          </Box>
          <Button
            onClick={isLogOut}
            variant="contained"
            sx={{ p: 2 }}
            style={{ backgroundColor: "#424649" }}
            endIcon={""}
          >
            {" "}
            <span className="cerrar-sesion">CERRAR SESIÓN</span>
            <LogoutIcon />
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt={user?.name} src={`/images/user/${user?.avatar}`} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
