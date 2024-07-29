import React from "react";
import { Box, Container, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#c7b3cc", color: "black", py: 4, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Trinity Realty</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              &copy; {new Date().getFullYear()} Real Estate management. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/property" color="inherit" underline="hover">
                Property
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton href="https://facebook.com" color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Contact us at: support@trinityrealty.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
