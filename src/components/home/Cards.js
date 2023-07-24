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
                            src='images/react.png'
                            text='Personal Blogs Website Using React'
                            label='Javascript'
                            path='https://github.com/jzxliu/react-website'
                        />
                        <CardItem
                            src='images/unity.jpeg'
                            text='Unity 2d Platformer Game (WIP)'
                            label='C#'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/assembly-game.png'
                            text='Pink Floyd Themed Breakout Game'
                            label='MIPS Assembly'
                            path='https://github.com/jzxliu/assembly_breakout_game'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Discord Chat Bot With Game Interfaces'
                            label='Python'
                            path='/'
                        />
                        <CardItem
                            src='images/stock-sim.png'
                            text='Stock Investment Simulator With Competitive Portfolios'
                            label='Java'
                            path='https://github.com/CSC207-2022F-UofT/course-project-Team-Stonks'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;