import logo from './logo.svg';
import './App.css';
import TestPage from './Navigation/TestPage';
import { Link, Router, Routes, Route, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import HomePage from './Home/HomePage';
import HomePage1 from './Home/HomePage1';
import ContactUs from "./Contact/ContactUs"
import Product from "./Products/Product"
import { Box, Container, Grid, Typography } from "@mui/material";

function App() {
  return (
    <>
      <div className="App">
        <TestPage />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            ></Route>
            <Route
              path="/home"
              element={<HomePage1 />}
            ></Route>
            <Route
              path="/contact"
              element={<ContactUs />}
            ></Route>

            <Route
              path="/product"
              element={<Product />}
            ></Route>


          </Routes>
        </div>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#222323",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography color="white" variant="h5">
                  We provide the best quality and affordable medical products needed for patient care at home. We also provide guidance on care giving for patients and senior citizens at home.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="white" variant="subtitle1">
                  {`${new Date().getFullYear()} | All Rights Reserved |Privacy Policy | Medical Disclaimer`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div></>
  );
}

export default App;
