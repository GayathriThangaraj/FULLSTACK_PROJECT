import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import './BackgroundAnimation.css';
const allProperties = [
  {
    title: "Luxury Villa",
    image: "https://tse2.mm.bing.net/th?id=OIP.yxE6BK88vckhzN0YXE1RZgHaE8&pid=Api&P=0&h=220",
    description: "Beautiful villa with sea view.",
    location: "New York",
    type: "house",
    price: 200000,
  },
  {
    title: "Modern Apartment",
    image: "https://tse1.mm.bing.net/th?id=OIP.wJUo3RbgCSZ_ktOLWHavvQHaEK&pid=Api&P=0&h=220",
    description: "Stylish apartment in the city center.",
    location: "Los Angeles",
    type: "apartment",
    price: 150000,
  },
  {
    title: "Cozy Cottage",
    image: "https://tse1.mm.bing.net/th?id=OIP.7EH7Zh2RezUrI8rS6t-9OgHaEK&pid=Api&P=0&h=220",
    description: "Charming cottage in the countryside.",
    location: "Texas",
    type: "cottage",
    price: 100000,
  },
  {
    title: "Dharshu-Villa",
    image: "https://tse2.mm.bing.net/th?id=OIP.w93Qcl3y8rtrSKKLznadJAHaEK&pid=Api&P=0&h=220",
    description: "Charming cottage in the countryside.",
    location: "Texas",
    type: "cottage",
    price: 100000,
  },
  {
    title: "Gayu-Villa",
    image: "https://tse4.mm.bing.net/th?id=OIP.MqJEETRfjC-r9DTvx5CROgHaEN&pid=Api&P=0&h=220",
    description: "Charming cottage in the countryside.",
    location: "Texas",
    type: "cottage",
    price: 100000,
  },
  {
    title: "Park-Eve",
    image: "https://tse2.mm.bing.net/th?id=OIP.YqXCSNL-5n_q2p8SDM_zjAHaEK&pid=Api&P=0&h=220",
    description: "Charming cottage in the countryside.",
    location: "Texas",
    type: "cottage",
    price: 100000,
  },
];

const Home = () => {
  const [search, setSearch] = useState({
    location: "",
    type: "",
    minPrice: "",
  });
  const [properties, setProperties] = useState(allProperties);

  const handleSearch = () => {
    const filtered = allProperties.filter((property) => {
      return (
        (search.location === "" ||
          property.location.toLowerCase().includes(search.location.toLowerCase())) &&
        (search.type === "" || property.type === search.type) &&
        (search.minPrice === "" || property.price >= Number(search.minPrice))
      );
    });
    setProperties(filtered);
  };

  return (
    <div>
      <Box
          sx={{
          height: "60vh",
          backgroundImage: 'url("/hero-background.jpg")',  // Set the correct path to your image
          backgroundSize: "cover",
          backgroundColor: "#c7b3cc",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: "bold" }} color={'black'}>
            Find Your Dream Home
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }} color={'black'}>
            Search properties for sale or rent.
          </Typography>
        </Container>
         </Box>

      <Container sx={{ mt: -8, mb: 4 }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                variant="outlined"
                label="Search by location"
                value={search.location}
                onChange={(e) => setSearch({ ...search, location: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                select
                fullWidth
                variant="outlined"
                value={search.type}
                onChange={(e) => setSearch({ ...search, type: e.target.value })}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">All</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="cottage">Cottage</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Min Price"
                type="number"
                value={search.minPrice}
                onChange={(e) => setSearch({ ...search, minPrice: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SearchRounded />}
                sx={{ height: "100%" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Featured Properties
        </Typography>
        <Grid container spacing={4}>
          {properties.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography variant="h6">{property.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
  
          ))}
       
        </Grid>

      </Container>
    </div>
  );
};

export default Home;

