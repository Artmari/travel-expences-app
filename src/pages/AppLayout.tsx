// src/App.tsx
import React from "react";
import {
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Footer from "../components/layout/Footer";
import ChatGPTForm from "../components/user-forms/components/ChatGPTForm";
import MultiStepForm from "../components/user-forms/MultiStepFrom";

const AppLayout: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2">kAIthi</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ marginTop: "16px" }}>
        <Box display="flex" justifyContent="center" mt={2} mb={3}>
          <Typography variant="h5" gutterBottom>
            Manage your travel expences
          </Typography>
        </Box>

        <MultiStepForm />
        {/* <ChatGPTForm /> */}
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
