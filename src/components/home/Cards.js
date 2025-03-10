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
                            src='images/fake_new_detector.png'
                            text='Python ML Projects'
                            label='Python'
                            path='https://github.com/jzxliu/ML-Project'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/skillz.png'
                            text='Skill Development Site Design With Figma'
                            label='Figma'
                            path='https://www.figma.com/design/iiiMyD06UIUNZsoSf067X9/Skillz-Website-v2%2C-current?t=23fXub1vfFgdwL3t-1'
                        />
                        <CardItem
                            src='images/segmentation.png'
                            text='Pediatric Brain Tumor Segmentation with Neural Networks'
                            label='Python'
                            path='https://drive.google.com/drive/folders/1UZkI5X3t7bnQrsrm19ruLhAuWGXSHQxI?usp=sharing'
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
                            src='images/sudoku.png'
                            text='Python AI Projects'
                            label='Python'
                            path='https://github.com/jzxliu/AI-Projects'
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