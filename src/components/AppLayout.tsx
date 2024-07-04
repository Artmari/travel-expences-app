// src/App.tsx
import React from 'react';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Footer from './Footer';
import TravelCostForm from './user-forms/TraveExpenceForm';

const AppLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" style={{ flex: 1, marginTop: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1">
          This is a simple layout example using React, TypeScript, and Material-UI.
        </Typography>
        <TravelCostForm />
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
