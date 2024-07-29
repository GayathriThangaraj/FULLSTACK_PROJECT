import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Link, InputAdornment, Paper } from "@mui/material";
import { Email, Lock, CheckCircle, PersonAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
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
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Handle sign up logic
    // If success:
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIP.R3YiXzE2qhmBoNna5cXl1AHaEK&pid=Api&P=0&h=220")', 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ textAlign: "center" }}>
            <PersonAdd sx={{ fontSize: 35, color: "#1976d2" }} />
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
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
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CheckCircle />
                  </InputAdornment>
                ),
              }}
            />
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
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Link href="/signin" variant="body2" sx={{ display: "block", mt: 2 }}>
              Already have an account? Sign In
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
