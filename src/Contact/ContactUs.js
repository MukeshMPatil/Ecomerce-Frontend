import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import Tab from '@material-ui/core/Tab';
// import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// function samePageLinkNavigation(event) {
//     if (
//         event.defaultPrevented ||
//         event.button !== 0 || // ignore everything but left-click
//         event.metaKey ||
//         event.ctrlKey ||
//         event.altKey ||
//         event.shiftKey
//     ) {
//         return false;
//     }
//     return true;
// }


function LinkTab(props) {
    return (
        <Tab
            component="a"
        // onClick={(event) => {
        //     if (samePageLinkNavigation(event)) {
        //         event.preventDefault();
        //     }
        // }}
        // aria-current={props.selected && 'page'}
        // {...props}
        />
    );
}


function ContactUs() {
    // const [value, setValue] = React.useState("1");
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        debugger;
        setValue(newValue);
    };
    const contactus = "Call Us"


    return (
        <>
            <h3 align='center'>Add new transaction</h3>
            <Divider orientation="horizontal" flexItem />
            
            
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <Item>
                <Grid item xs={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                        <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <BottomNavigation
                                showLabels
                                value={value}
                            >
                                <BottomNavigationAction label="Contact" icon={<LocalPhoneIcon />} />
                            </BottomNavigation>
                            </Box>
                            <TabPanel value="1" className='min-height'><h2>Call Us</h2><p>+91-9021457004, +91- 8080939817</p></TabPanel>
                        </TabContext></Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <BottomNavigation
                                showLabels
                                value={value}
                            >
                                <BottomNavigationAction label="Adress" icon={<PlaceIcon />} />
                            </BottomNavigation>
                            </Box>
                            <TabPanel value="1" className='min-height'><h2>info@test.com</h2></TabPanel>
                        </TabContext></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <BottomNavigation
                                showLabels
                                value={value}
                            >
                                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                            </BottomNavigation>
                            </Box>
                            <TabPanel value="1" className='min-height'><h2>info@test.com</h2></TabPanel>
                        </TabContext></Item>
                        </Grid>
                    </Grid>
                    <br />

                </Grid>
                </Item>
            </Box>




            {/* <Tabs
                value="0"
                aria-label="nav tabs example"
                role="navigation" centered
            >
                <LinkTab label="Contact Us" />
            </Tabs>
            <Divider />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab icon={<LocalPhoneIcon />} label="Call Us" value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" className='min-height'><h2>Call Us</h2>
                                <p>+91-9021457004, +91- 8080939817</p></TabPanel>
                        </TabContext></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab icon={<PlaceIcon />} label="Adress" value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" className='min-height'>Item One</TabPanel>
                        </TabContext></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><TabContext value="1">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab icon={<EmailIcon />} label="Email" value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" className='min-height'><h2>info@test.com</h2></TabPanel>
                        </TabContext></Item>
                    </Grid>
                </Grid>
                <br />


            </Box>
 */}

        </>
    );
}
export default ContactUs;