import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as necessary
import { Link, Box, Button, Typography } from '@mui/material';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <Box sx={{ backgroundColor: '#c7b3cc', color: '#fff', p: 4 , margin: 0}}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link href="/" variant="h4" underline="none" sx={{ color: 'black', fontFamily:"-moz-initial", fontWeight:"bold"}}>
          TRINITY REALTY
        </Link>
        <Box>
          {user ? (
            <Box display="flex" alignItems="center" color="black">
              <Typography variant="body1" sx={{ mr: 2 }}>
               {user.username}
              </Typography>
              <Button variant="outlined" color="secondary" onClick={signOut}>
                Sign Out
              </Button>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Button
                variant="outlined"
                sx={{ color: 'black', borderColor: '#fff', mr: 2 }}
                href="/"
              >
                Home
              </Button>
              <Button
                variant="outlined"
                sx={{ color: 'black', borderColor: '#fff', mr: 2 }}
                href="/"
              >
                 Agent
              </Button>
              <Button
                variant="outlined"
                sx={{ color: 'black', borderColor: '#fff', mr: 2 }}
                href="/"
              >
                Property
              </Button>
              <Button
                variant="outlined"
                sx={{ color: 'black', borderColor: '#fff', mr: 2 }}
                href="/signin"
              >
                Sign In
              </Button>
              <Button
                variant="outlined" // Change variant to "outlined" to match the others
                sx={{ color: 'black', borderColor: '#fff' }}
                href="/signup"
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
