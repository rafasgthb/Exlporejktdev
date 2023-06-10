import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/12.jpg'
              text='Taman Mini Indonesia Indah'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Trip Kepulauan Seribu'
              label='Nature'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/setu.jpg'
              text='Setu Babakan Kampung Betawi'
              label='History'
            />
            <CardItem
              src='images/dufan.jpeg'
              text='Dunia Fantasi Ancol'
              label='Adventure'
            />
            <CardItem
              src='images/museum.jpg'
              text='Museum Nasional Indonesia'
              label='History'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
