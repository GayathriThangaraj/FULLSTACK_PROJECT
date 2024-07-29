import React from "react";
import { List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, backgroundColor: 'white', height: '100vh' }}>
      <List component="nav">
        <ListItem
          component={RouterLink}
          to="/"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/profile"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/settings"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/settings"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="About" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/settings"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Agent" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/settings"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Query" />
        </ListItem>
        <Divider />
        <ListItem
          //component={RouterLink}
          to="/settings"
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
            padding: '16px',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default Sidebar;
