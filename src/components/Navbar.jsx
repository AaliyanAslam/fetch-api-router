// import React from 'react'
import { Link } from "react-router-dom";

// test

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const navItems = ["Home", "About", "products", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            {/* <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav"  >
        <Toolbar className="d-flex justify-content-between ">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
                color: "#fff",
                padding: 0,
  
                "& a": {
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: 1,
                  transition: "color 0.3s ease",
                },
                "& a:hover": {
                  color: "wheat",
                },
              }}
          >
            <Link to={""}> Fetch Products</Link>

           
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              color: "#fff",
              padding: 0,

              "& a": {
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                padding: 1,
                transition: "color 0.3s ease",
              },
              "& a:hover": {
                color: "wheat",
              },
            }}
          >
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"products"}>Products</Link>
            <Link to={"contact"}>Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde */}
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
