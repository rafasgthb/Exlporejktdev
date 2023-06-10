
import React from 'react';
import '../components/css/about.css'
import CardItem from './CardItem';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <>
            <div className='tentang_kami'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid style={{ paddingLeft: "50px", paddingTop: "50px" }} item xs={4}>
                    <img style={{ width: "300px",paddingTop:"100px" }} src='images/layanan.png' ></img>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Tujuan utama dalam membuat aplikasi pengenalan wisata di DKI Jakarta adalah untuk memberikan informasi yang komprehensif dan mudah diakses kepada para pengguna tentang tempat-tempat wisata, atraksi, kuliner, acara, dan layanan terkait di wilayah tersebut.
                        </Typography>
                    </Grid>
                    <Grid style={{ paddingLeft: "50px" }} item xs={8}>
                        <Grid container >
                            <Grid item style={{ paddingLeft: "50px", paddingTop: "50px", paddingRight: "30px" }}>
                                <Card style={{ width: "300px", height: "250px" }} >
                                    <CardContent>
                                        <Typography variant="body2">
                                            <img style={{ width: "50px" }} src='images/party.png' ></img>
                                            <h2>Event</h2>
                                        </Typography>
                                        <Typography style={{ paddingTop: "10px" }} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Kami memberikan rekomendasi acara yang sedang dan akan diselenggarakan di lingkungan DKI Jakarta, untuk memudahkan masyarakat dalam mengisi waktu berlibur.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item style={{ paddingTop: "50px", paddingRight: "30px" }}>
                                <Card style={{ width: "300px", height: "250px" }} >
                                    <CardContent>
                                        <Typography variant="body2">
                                            <img style={{ width: "50px" }} src='images/location.png' ></img>
                                            <h2>Destinasi</h2>
                                        </Typography>
                                        <Typography style={{ paddingTop: "10px" }} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Kami memberikan rekomendasi tempat wisata terkini di lingkungan DKI Jakarta, untuk memudahkan masyarakat dalam menentukan tujuan berwisata.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item style={{ paddingTop: "20px", paddingLeft: "50px" }}>
                                <Card style={{ width: "300px", height: "250px" }} >
                                    <CardContent>
                                        <Typography variant="body2">
                                            <img style={{ width: "50px" }} src='images/direct.png' ></img>
                                            <h2>Arah</h2>
                                        </Typography>
                                        <Typography style={{ paddingTop: "10px" }} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Kami memberikan arahan melalui google mapagar pengguna dapat menuju ke tempat wisata dengan mudah.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item style={{ paddingTop: "20px", paddingLeft: "30px" }}>
                                <Card style={{ width: "300px", height: "250px" }} >
                                    <CardContent>
                                        <Typography variant="body2">
                                            <img style={{ width: "50px" }} src='images/time.png' ></img>
                                            <h2>Mudah dan Cepat</h2>
                                        </Typography>
                                        <Typography style={{ paddingTop: "10px" }} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Layanan ini dibangun berbasis website, sehingga dapat dibuka dimana saja dan kapan saja. Mudah dan cepat digunakan saat akan mencari destinasi untuk bepergian.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </div>
            <div className='cards'>
                <h1>Tim Kami</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/rafa.png'
                                text='Rafa Nabila Afifah'
                                label='Programmer'
                            />
                            <CardItem
                                src='images/akmal.png'
                                text='Muhammad Hibatur Akmal'
                                label='Project Manager'
                            />
                            <CardItem
                                src='images/silvi.png'
                                text='Silvi Eprianti'
                                label='Designer'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
