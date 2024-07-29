import React from "react";
import { Container, Grid, Box, Card, CardContent, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TableComponent from "../components/TableComponent";
import { Pie, Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const pieData = {
    labels: ["Property A", "Property B", "Property C", "Property D"],
    datasets: [
      {
        data: [20, 20, 20, 30],
        backgroundColor: ["#1976d2", "#ff5722", "green", "orange"],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Monthly Growth",
        data: [40, 20, 80],
        borderColor: "#1976d2",
        backgroundColor: "rgba(25, 118, 210, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Property A", "Property B", "Property C"],
    datasets: [
      {
        label: "Property Value",
        data: [40, 60, 80],
        backgroundColor: ["orange", "gray", "green"],
      },
    ],
  };

  const doughnutData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        data: [30, 50, 80],
        backgroundColor: ["#1976d2", "#ff5722", "green"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce'
    }
  };

  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'inherit', top: 110, left: 0, height: '100vh', bgcolor: 'white' }}>
            <Sidebar />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom fontFamily={"inherit"}>
              Welcome to the Admin Dashboard
            </Typography>
            <Typography variant="h6" component="h1" alignItems={'center'}>
              Where you connect with your Properties and Updates
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Property Distribution
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Pie data={pieData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Monthly Growth
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Line data={lineData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Property Value Comparison
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Bar data={barData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Revenue Distribution
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Doughnut data={doughnutData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Data Table
                  </Typography>
                  <TableComponent />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
