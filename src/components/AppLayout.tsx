// src/App.tsx
import React from "react";
import {
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import Footer from "./Footer";
import ChatGPTForm from "./user-forms/ChatGPTForm";
import MultiStepForm from "./user-forms/MultiStepFrom";

const AppLayout: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2">kAIthi</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" style={{ flex: 1, marginTop: "16px" }}>
        <Typography variant="h6" gutterBottom>
          Manage your travel expences
        </Typography>
        <MultiStepForm />
        <ChatGPTForm />
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
