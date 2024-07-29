import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  InputAdornment,
  Paper
} from "@mui/material";
import { Email, Lock, Login, Person2 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust the import path as necessary

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    // Perform validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await signIn({ email, password });
      navigate("/dashboard");
    } catch (e) {
      setError("Failed to sign in");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("https://tse1.mm.bing.net/th?id=OIP.4kI45i34KSZNcgcZnUl2WQHaE7&pid=Api&P=0&h=220")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
        <Box sx={{ textAlign: "center" }}>
          <Person2 sx={{ fontSize: 34, color: "#1976d2" }} />
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              mb: 2,
              px: 5,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#155a9a',
              },
              transition: 'background-color 0.3s ease',
            }}
            onClick={handleSignIn}
            startIcon={<Login />}
          >
            Sign In
          </Button>
          <Link href="/signup" variant="body2" sx={{ display: "block", mt: 2 }}>
            Don't have an account? Sign Up
          </Link>
          <Link href="#" variant="body2" sx={{ display: "block", mt: 1 }}>
            Forgot Password?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
