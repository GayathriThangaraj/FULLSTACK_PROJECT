import React from "react";
import { Container, Grid, Box, Card, CardContent, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TableComponent from "../components/TableComponent";
import { PieChart, LineChart, BarChart, ColumnChart, AreaChart } from "react-chartkick";
import "chartkick/chart.js";

const Dashboard = () => {
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
             Welcome to the User Dashboard
            </Typography>
            <Typography variant="h6" component="h1" alignItems={'center'}>
  
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Property Distribution
                  </Typography>
                  <PieChart
                    data={[["Property A", 40], ["Property B", 20], ["Property C", 20], ["Property D", 20],["Property E", 20],["Property F", 20]]}
                    colors={["#1976d2", "#ff5722", "green", "orange","#a4c6b8","#e91fa8"]}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Monthly Growth
                  </Typography>
                  <LineChart
                    data={{ "2020-01-01": 40, "2020-02-01": 20, "2020-03-01": 80 }}
                    colors={["#1976d2"]}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Property Value Comparison
                  </Typography>
                  <BarChart
                    data={[["Property A", 40], ["Property B", 60], ["Property C", 80]]}
                    colors={["orange", "gray", "green"]}
                  />
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
