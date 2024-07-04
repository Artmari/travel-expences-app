// src/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f1f1f1' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 My Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
