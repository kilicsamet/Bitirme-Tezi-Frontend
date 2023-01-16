import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const handleExit = () => {
    localStorage.removeItem("jwtToken");
    navigate('/login')
  };
  const [arabalar, setArabalar] = React.useState(true);
  const handleClick = () => {
    setArabalar(!arabalar);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [actives, setActives] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }} className='text-dark bg-white' >
      <CssBaseline />
      <AppBar position="fixed" open={open} className='text-dark bg-white'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />

          </IconButton>
          <Typography variant="h6" noWrap component="div" >
            Admin Paneline Hoşgeldiniz
          </Typography>

          <div style={{ position: "absolute", right: "10px", display: "flex", justifyContent: "end" }}>
            <button type="button" class="btn btn-danger" onClick={handleExit}>Çıkış Yap</button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={logo} className='img-fluid shadow-4' onClick={() => navigate("/admin")} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu
            </ListSubheader>
          }
        >
          <ListItemButton className={actives === "admin" ? 'nav-link bg-light text-muted' : ""} onClick={() =>{ navigate("/admin")
        setActives("admin")
        }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Anasayfa" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ElectricCarIcon />
            </ListItemIcon>
            <ListItemText primary="Arabalar" />
            {arabalar ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={arabalar} timeout="auto" unmountOnExit>
            <NavLink
              to="/admin/model-s"
              className={({ isActive }) =>
                isActive ? 'nav-link bg-light text-muted' : 'text-dark'
              }
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ElectricCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Model S" />
                </ListItemButton>
              </List>
            </NavLink>
            <NavLink
              to="/admin/model-3"
              className={({ isActive }) =>
                isActive ? 'nav-link bg-light text-muted' : 'text-dark'
              }
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ElectricCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Model 3" />
                </ListItemButton>
              </List>
            </NavLink>
            <NavLink
              to="/admin/model-x"
              className={({ isActive }) =>
                isActive ? 'nav-link bg-light text-muted' : 'text-dark'
              }
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ElectricCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Model X" />
                </ListItemButton>
              </List>
            </NavLink>
            <NavLink
              to="/admin/model-y"
              className={({ isActive }) =>
                isActive ? 'nav-link bg-light text-muted' : 'text-dark'
              }
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ElectricCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Model Y" />
                </ListItemButton>
              </List>
            </NavLink>
          </Collapse>
          <ListItemButton className={actives === "solar-roof" ? 'nav-link bg-light text-muted' : ""} onClick={() => {
            navigate('/admin/solar-roof')
            setActives("solar-roof")
          }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Solar Roof" />
          </ListItemButton>
          <ListItemButton className={actives === "solar-panel" ? 'nav-link bg-light text-muted' : ""} onClick={() => {
            navigate('/admin/solar-panel')
            setActives("solar-panel")
          }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Solar Panel" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}