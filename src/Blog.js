import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bg1 from '../src/images/Bg1.jpg';
import { useNavigate } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6];
const defaultTheme = createTheme();

export default function Album() {
  const n=useNavigate();
  const Si = () =>{
    n('/Signin')
}
  const Su = () =>{
    n('/Signup')
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            backgroundImage: `url(${Bg1})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', 
            height: '100vh',
            overflow: 'hidden', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Container>
            <Typography className='a'
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              Right Diet
            </Typography>

            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="secondary" onClick={Su}>
                Sign-Up
              </Button>
              <Button variant="contained" color="secondary" onClick={Si}>
                Sign-In
              </Button>
            </Stack>
          </Container>
        </Box>
        </main>
        </ThemeProvider>
        );
      }
      // <Container sx={{ py: 8 }} maxWidth="md">
      // </Container>