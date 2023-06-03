import React from 'react';
import '../../App.css';
import EventSection from './event';
import Footer from '../Footer';
import s4 from '../../img/s4.png';
import '../Cards.css';
import CardItem from '../CardItem';


function EventPages() {
  return (
    <>
        <div className='events'>
            <img src={s4} style={{width:"100%", height:"300px", paddingLeft:"10%", paddingRight:"10%", paddingTop:"3%"}} ></img>
        </div>
        <div className='topevents'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <h2>Top Events</h2><br/>
          <ul className='cards__items'>
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>1</h1>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              
            />
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>2</h1>
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
            <h1 style={{fontSize:"120px",textShadow: "1px 1px 2px black"}}>3</h1>
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
        </div>
      </div>
        </div>
        <EventSection />
        <Footer />
    </>
  );
}

export default EventPages;
