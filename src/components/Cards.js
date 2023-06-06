import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out some of my projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Personal Blog Website Using React'
                            label='Javascript'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Unity 2d Platformer Game (WIP)'
                            label='C#'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Pink Floyd Themed Breakout Game'
                            label='MIPS Assembly'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Discord Chat Bot With Game Interfaces'
                            label='Python'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Stock Investment Simulator With Competitive Portfolios'
                            label='Java'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;