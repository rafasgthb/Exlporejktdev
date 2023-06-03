import React from 'react'

import { Helmet } from 'react-helmet'

import '../css/eventcss.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import des from '../../img/12.jpg'
import s1 from '../../img/s1.png'
import s2 from '../../img/s2.png'
import s3 from '../../img/s3.png'
import s4 from '../../img/s4.png'
import slide from './slider';

const Event = (props) => {
    return (
        <div className="landing-page-container">
            <Helmet>
                <title>Travel Agency</title>
                <meta property="og:title" content="Travel Agency" />
            </Helmet>
            <div className="landing-page-top-container">
                <h1 style={{ paddingTop: "70px" }}>Event DKI Jakarta</h1>
                <span><b>Halaman ini menyajikan hasil pencarian kami seputar acara yang diselenggarakan di DKI Jakarta.</b></span>
            </div>
            <div id="main-section" className="landing-page-main">
                <slide/>
                <br></br>
                <div className="nearest-event">
                    <h4>Event Terdekat!</h4>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                            <Card sx={{ maxWidth: 250 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="150"
                                    image={des}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nama Event
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tanggal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Harga
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">BOOK</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Card sx={{ maxWidth: 250 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="150"
                                    image={des}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nama Event
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tanggal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Harga
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">BOOK</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Card sx={{ maxWidth: 250 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="150"
                                    image={des}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Nama Event
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tanggal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Harga
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">BOOK</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <img src={s4} style={{width:"100%", height:"300px", paddingTop:"30px"}} ></img>
                <div className="landing-page-gallery">
                    
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={des}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>                   
                </div>
            </div>
        </div>
        
    )
}

export default Event
