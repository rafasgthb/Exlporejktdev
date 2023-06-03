import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Cards.css';
import CardItem from './CardItem';
import Grid from '@mui/material/Grid'

function About() {
    return (
        <>
            <div className='hero-container' >
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <h1>EXPLORE JAKARTA</h1>
                <p>Where are you going to?</p>
            </div>
            <div className='cards'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <h1>Event DKI Jakarta</h1>
                        <span><b>Halaman ini menyajikan hasil pencarian kami seputar acara yang diselenggarakan di DKI Jakarta.</b></span>
                    </Grid>
                    <Grid item xs={6}>
                        2
                    </Grid>
                </Grid>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/ancol.jpeg'
                                text='Bermain di Dunia Fantasi Ancol'
                                label='Programmer'
                                path='/services'
                            />
                            <CardItem
                                src='images/setu.jpg'
                                text='Setu Babakan Perkampungan Kebudayaan Betawi'
                                label='Project Manager'
                                path='/destination'
                            />
                            <CardItem
                                src='images/museum.jpg'
                                text='Museum Nasional Indonesia'
                                label='Designer'
                                path='/sign-up'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
