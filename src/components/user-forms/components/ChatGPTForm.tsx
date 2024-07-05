// src/App.tsx
import React, { useState, FormEvent } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import { generateText } from '../../../OpenAIIntegration';

const ChatGPTForm: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const generatedText = await generateText(prompt);
      setResponse(generatedText);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          OpenAI Text Generator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your prompt"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            margin="normal"
          />
          <Box my={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Generate Text'}
            </Button>
          </Box>
        </form>
        {response && (
          <Box mt={4} textAlign="left">
            <Typography variant="h6" component="h2">
              Response
            </Typography>
            <Typography variant="body1">
              {response}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ChatGPTForm;
