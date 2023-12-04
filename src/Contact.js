import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';


const socialIcons = [
  { icon: <FacebookIcon />, link: 'https://www.facebook.com/' },
  { icon: <TwitterIcon />, link: 'https://twitter.com/Kaushik36003266 ' },
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/sai-kaushik-8a1960255/' },
];

const defaultTheme = createTheme();

export default function ContactPage() {
  const n=useNavigate();
    const Hp = () =>{
      n('/Homepage')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* You can use an icon or an image for the avatar */}
            ✉
          </Avatar>
          <button onClick={Hp} className='ba' >Back</button>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            Connect with us on social media:
          </Typography>
          <Box sx={{ mt: 1 }}>
            {socialIcons.map((social, index) => (
              <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer" sx={{ mx: 1, fontSize: '2rem', color: 'text.primary' }}>
                {social.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}