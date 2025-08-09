import { useState } from 'react'
import './App.css'
import { Container, Typography,Box, TextField, FormControl, InputLabel, Select, MenuItem, Menu, Button, CircularProgress} from '@mui/material';
import axios from 'axios';

function App() {
    const [emailContent,setEmailContent] = useState('');
    const [tone,setTone] = useState('');
    const  [generatedReply,setGeneratedReply] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const handleSubmit = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.post("http://localhost:8081/api/email/generate",{
          emailContent,
          tone
        });

        setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));

      } catch (error) {
        setError('An error occurred, Failed to generate email reply. Please try again later.');
        console.error(error);
      } finally{
        setLoading(false);
      }
    };

  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Generator
      </Typography>
      <Box sx={{my:3}}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{mb:2}}
        />

        <FormControl fullWidth variant="outlined" sx={{mb:2}}>
          <InputLabel>Tone (Optional) </InputLabel>
          <Select 
            value={tone||""}
            label={"Tone (Optional)"}
            onChange={(e) => setTone(e.target.value)}
           >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>

          </Select>
        </FormControl>

        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
          >
          {loading ? <CircularProgress size={24}/> : 'Generate Reply'}
        </Button>
      </Box>

      {error && (
        <Typography color='error' sx={{mb:2, mt:2}}>
          {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{mt:4}}>
          <Typography variant='h5' component='h2' gutterBottom>
            Generated Reply
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={10}
            variant='outlined'
            value={generatedReply || ''}
            sx={{mb:2}}
            inputProps={{readOnly:true}}
          />

          <Button 
            variant='contained'
            sx={{mt:2}}
            onClick={() => navigator.clipboard.writeText(generatedReply)} // Copy to Clipboard
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default App