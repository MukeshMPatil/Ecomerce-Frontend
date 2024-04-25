import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import imagePath from "../asset/image.jpg"
import Wheelchair from "../asset/Wheelchair.jpg"
import Oxygen from "../asset/Oxygen.jpeg"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


// import Imagecompoment from "./Imagecompoment"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ButtonBase from '@mui/material/ButtonBase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function HomePage1() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <Item>
                    <Card sx={{ maxWidth: 1000 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            width="auto"
                            image={imagePath}
                            alt="green iguana"
                        />
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item> <h1>WHEELCHAIR | OXYGEN CONCENTRATOR | SUCTION MACHINE | BIPAP MACHINE | COMMODE CHAIR ON RENT</h1>

                    <p style={{fontSize : 18}}> Empowering Health with Convenient Medical Equipment Rentals

                        In the realm of healthcare, accessibility to important scientific equipment performs a pivotal role in improving the high-quality of life for people coping with diverse fitness situations. At ***, Pune’s leading medical equipment rental enterprise.
                        We take pride in being a dependable supplier of a numerous range of device that cater to special healthcare requirements of patients and senior citizens who want help and guide at home in Pune. From respiration and sleep therapy solutions to mobility aids and affected person room furnishings, devoted to making sure that our clients have access to the proper equipment for their well-being. For the ones grappling with breathing and sleep-associated troubles in Pune, our complete variety of gadget includes Oxygen Concentrators, CPAP, BiPAP AVAPs, and BiPAP machines on rent in Pune.
                        The equipment’s are vital in presenting respiratory guide and sleep therapy, contributing to progressed sleep patterns and usual respiration fitness. Mobility is a key component in maintaining independence, and our selection of wheel chairs, walkers, and commode chairs is designed to facilitate easy movement for individuals with restrained mobility at home in Pune.</p>
                </Item>
            </Grid>
        </Grid>
         <Grid container spacing={2}>
         
         <Grid item xs={4}>
             <Item>

                 <Grid item xs={12}>
                     <Paper
                         sx={{
                             p: 2,
                             margin: 'auto',
                             maxWidth: 500,
                             flexGrow: 1,
                             backgroundColor: (theme) =>
                                 theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                         }}
                     >
                         <Grid container spacing={2}>
                             <Grid item>
                                 <ButtonBase sx={{ width: 200, height: 200 }}>
                                     <Img alt="complex" src={Wheelchair} />
                                 </ButtonBase>
                             </Grid>
                             <Grid item xs={12} sm container>
                                 <Grid item xs container direction="column" spacing={2}>
                                     <Grid item xs>
                                         <Typography gutterBottom variant="subtitle1" component="div">
                                             Oxygen Concentrator
                                         </Typography>
                                         <Typography variant="body2" gutterBottom>
                                             <List sx={{ listStyleType: 'disc' }}>
                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>

                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>


                                             </List>

                                         </Typography>
                                         <Typography variant="body2" color="text.secondary">
                                             ID: *
                                         </Typography>
                                     </Grid>
                                     <Grid item>
                                         <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                             Read More
                                         </Typography>
                                     </Grid>
                                 </Grid>
                                 <Grid item>
                                     <Typography variant="subtitle1" component="div">
                                         *** {/* ₹3,500 /month */}
                                     </Typography>
                                 </Grid>
                             </Grid>
                         </Grid>

                     </Paper>
                 </Grid>

             </Item>
         </Grid>
         
         <Grid item xs={4}>
             <Item>

                 <Grid item xs={12}>
                     <Paper
                         sx={{
                             p: 2,
                             margin: 'auto',
                             maxWidth: 500,
                             flexGrow: 1,
                             backgroundColor: (theme) =>
                                 theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                         }}
                     >
                         <Grid container spacing={2}>
                             <Grid item>
                                 <ButtonBase sx={{ width: 200, height: 200 }}>
                                     <Img alt="complex" src={Wheelchair} />
                                 </ButtonBase>
                             </Grid>
                             <Grid item xs={12} sm container>
                                 <Grid item xs container direction="column" spacing={2}>
                                     <Grid item xs>
                                         <Typography gutterBottom variant="subtitle1" component="div">
                                             Oxygen Concentrator
                                         </Typography>
                                         <Typography variant="body2" gutterBottom>
                                             <List sx={{ listStyleType: 'disc' }}>
                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>

                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>


                                             </List>

                                         </Typography>
                                         <Typography variant="body2" color="text.secondary">
                                             ID: *
                                         </Typography>
                                     </Grid>
                                     <Grid item>
                                         <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                             Read More
                                         </Typography>
                                     </Grid>
                                 </Grid>
                                 <Grid item>
                                     <Typography variant="subtitle1" component="div">
                                         *** {/* ₹3,500 /month */}
                                     </Typography>
                                 </Grid>
                             </Grid>
                         </Grid>

                     </Paper>
                 </Grid>

             </Item>
         </Grid>

         <Grid item xs={4}>
             <Item>

                 <Grid item xs={12}>
                     <Paper
                         sx={{
                             p: 2,
                             margin: 'auto',
                             maxWidth: 500,
                             flexGrow: 1,
                             backgroundColor: (theme) =>
                                 theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                         }}
                     >
                         <Grid container spacing={2}>
                             <Grid item>
                                 <ButtonBase sx={{ width: 150, height: 150 }}>
                                     <Img alt="complex" src={Wheelchair} />
                                 </ButtonBase>
                             </Grid>
                             <Grid item xs={12} sm container>
                                 <Grid item xs container direction="column" spacing={2}>
                                     <Grid item xs>
                                         <Typography gutterBottom variant="subtitle1" component="div">
                                             Oxygen Concentrator
                                         </Typography>
                                         <Typography variant="body2" gutterBottom>
                                             <List sx={{ listStyleType: 'disc' }}>
                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>

                                                 <ListItem sx={{ display: 'list-item' }} > One of the main design features is that, it is almost silent during operation at around 40 decibels.
                                                 </ListItem>


                                             </List>

                                         </Typography>
                                         <Typography variant="body2" color="text.secondary">
                                             ID: *
                                         </Typography>
                                     </Grid>
                                     <Grid item>
                                         <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                             Read More
                                         </Typography>
                                     </Grid>
                                 </Grid>
                                 <Grid item>
                                     <Typography variant="subtitle1" component="div">
                                         *** {/* ₹3,500 /month */}
                                     </Typography>
                                 </Grid>
                             </Grid>
                         </Grid>

                     </Paper>
                 </Grid>

             </Item>
         </Grid>
     </Grid>
     </>
    );
}
export default HomePage1;