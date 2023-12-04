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
import img1 from "./images/infant.jpg";
import img2 from "./images/Toddler.jpg";
import img3 from "./images/Child.jpg";
import img4 from "./images/Teenage.jpg";
import img5 from "./images/Adult.jpg";
import img6 from "./images/Old age.jpg";
import Bg2 from "./images/Bg2.jpg"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Containe = styled.div` 
backgroundImage: url(${Bg2})`


const images=[img1,img2,img3,img4,img5,img6];
const value=['INFANT','TODDLER','KIDS','TEENS','ADULTS','ELDERS']
const cards = [{id:1,imgid:0,content:"Babies are so cute.It is essential to protect them by giving them food with required nutrients.Click here to know more",fun:'InfantDiet'},
  {id:2,imgid:1,content:"Toddlers and God are the same. Both are innocent and can be mend to our ways.Click here to know their right diet",fun:'ToddlerDiet'},
  {id:3,imgid:2,content:"Kids are nothing but buds.They are meant to be protected and should be protected.Click here to know their best diet",fun:'KidsDiet'},
  {id:4,imgid:3,content:"Today's teens are tomorrow's pillers.They grow up and start working for their family's future.It is essential for teens to know their Diet.Click here to know more",fun:'TeenageDiet'},
  {id:5,imgid:4,content:"Adults are nothing but pillers in which many people are dependent.In their fast running world it is necessary to know thier right diet.Click here to learn their exact diet",fun:'AdultDiet'},
   {id:6,imgid:5,content:"Elder people are those who protected us during our bad times.It is important to know their right diet.Click here to know their right diet with exact nutrients",fun:'ElderlyDiet'}];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const n=useNavigate();
  const Ab = () =>{
    n('/About')
  }
  const Ct = () =>{
    n('/Contact')
  }
  const Lo = () =>{
    n('/')
  }
  const Bmi = () =>{
    n('/Bmi')
  }


  const Inf=(card)=>{
    n(`/${card.fun}`)
  } 
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" className='K  bg'>    
        <Toolbar>
          
          <Typography variant="h6" color='h6' noWrap>
            Right Diet
            <table>
            <tr>
              <td> <button className='ab' onClick={Ab}>About</button></td>
              <td> <button onClick={Ct} className='ab'>Contact</button></td>  
              <td> <button onClick={Lo} className='ab'>Logout</button></td>
              <td> <button onClick={Bmi} className='ab'>BMI</button></td>
              <td> <button onClick={Lo} className='ab'></button></td>
            </tr>
          </table>
          
          </Typography>
        </Toolbar>
      </AppBar>
      
      <main className='Hpbg'>
        {/* Hero unit */}
        <Box className='Dan'
          sx={{
            
            backgroundSize :'cover',
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Containe>
          <Container  maxWidth="sm">
          
            <Typography
           
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >

            </Typography>
         
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
          </Containe>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}  
                    image={images[card.imgid]}  
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value[card.imgid]}
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>Inf(card)} size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </ThemeProvider>
  );
}