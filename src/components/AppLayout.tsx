// src/App.tsx
import React from "react";
import {
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import Footer from "./layout/Footer";
import ChatGPTForm from "./user-forms/components/ChatGPTForm";
import MultiStepForm from "./user-forms/MultiStepFrom";

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
        <Typography variant="h6" gutterBottom>
          Manage your travel expences
        </Typography>
        <MultiStepForm />
        {/* <ChatGPTForm /> */}
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
