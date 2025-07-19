import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import TocIcon from "@mui/icons-material/Toc";
import PeopleIcon from "@mui/icons-material/People";
// import ReviewsIcon from "@mui/icons-material/Reviews";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const adminRoutes = [
    {
      name: "Dashboard",
      redirect: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "All Products",
      redirect: "/admin/all-products",
      icon: <TocIcon />,
    },
    {
      name: "Create Products",
      redirect: "/admin/all-products/create",
      icon: <AddIcon />,
    },
    {
      name: "All Orders",
      redirect: "/admin/all-orders",
      icon: <TocIcon />,
    },
    {
      name: "All Users",
      redirect: "/admin/all-users",
      icon: <PeopleIcon />,
    },
    // {
    //   name: "Reviews",
    //   redirect: "/admin/all-reviews",
    //   icon: <ReviewsIcon />,
    // },
    {
      name: "Add Banner",
      redirect: "/admin/banner",
      icon: <AddCircleIcon />,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" style={{height: "90px"}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgb(170, 93, 93)" }}>
          <Toolbar>
            <IconButton color="inherit"
              aria-label="open drawer"  onClick={toggleDrawer}  edge="start"
              sx={{ marginRight: 2, color: "red" }} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "rgb(170, 93, 93)",
              color: "white",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", color: "white", paddingTop:"8px" }} >
            <List>
              <Link to="/" style={{ textDecoration: 'none' }} >
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleDrawer}>
                    <ListItemIcon title="Visit Website" style={{ color: "#fff" }}>
                      {/* Replace this with your logo */}
                     <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
              </Link>
              {adminRoutes.map((text, index) => (
                <Link to={text.redirect} key={index} style={{ textDecoration: 'none' }}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={toggleDrawer}>
                      <ListItemIcon style={{ color: "#fff" }}>
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText primary={text.name} style={{color:"white"}}/>
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
