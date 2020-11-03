import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>My Portfolio</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/Screen Shot 2020-09-19 at 5.01.00 PM.png"
                            text="For Project 1, we have created app called Local Brews and users can use this app to find local Breweries!"
                            label="Local Brews"
                            path="https://nodirbek94.github.io/Local-Brews/"
                        />
                        <CardItem src="images/Screen Shot 2020-10-19 at 4.27.16 PM.png"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Restaurant Finder"
                            path="https://findtherestaurant500.herokuapp.com/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/Screen Shot 2020-10-19 at 4.18.05 PM.png"
                            text="Burger App, user can order new burgers and it can be devoured when the devoured button is pressed!"
                            label="Burger App"
                            path="https://hidden-meadow-84053.herokuapp.com/burgers"
                        />
                        <CardItem src="images/Screen Shot 2020-10-19 at 4.30.41 PM.png"
                            text="Note Taker is a app where users can use the app to take new notes and the notes will be saved into the localhost!"
                            label="Note Taker"
                            path="https://agile-oasis-44596.herokuapp.com/"
                        />
                        <CardItem src="images/Screen Shot 2020-09-20 at 3.34.55 PM.png"
                            text="Users can use the Work Day Scheduler to organize their work day by saving their meetings or appoitments!"
                            label="Work Day Scheduler"
                            path="https://nodirbek94.github.io/WorkDayScheduler/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/Screen Shot 2020-09-20 at 3.39.08 PM.png"
                            text="Random password can be used to generate random passwords, users can create variety of password with numbers, letters and special characters!"
                            label="Password Generator"
                            path="https://nodirbek94.github.io/RandomPG/"
                        />
                        <CardItem src="images/Screen Shot 2020-09-20 at 3.50.57 PM.png"
                            text="This is a quiz application with 10 JavaScript related questions and user have 100 seconds to answer all the questions!"
                            label="Quiz Code Challenge"
                            path="https://nodirbek94.github.io/CodeQuiz/"
                        />
                        <CardItem src="images/Screen Shot 2020-10-26 at 6.21.37 PM.png"
                            text="Budget Tracker is application where users can add transaction or subtract transaction and app can be used offline too!"
                            label="Budget Tracker"
                            path="https://budget-ap.herokuapp.com/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;