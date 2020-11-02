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
                        <CardItem src="https://uploads.visitseattle.org/2015/07/01210133/FremontBrewing-SparklyPhotography-CMYK-900x600.jpg"
                            text="For Project 1, we have created app called Local Brews and users can use this app to find local Breweries!"
                            label="Local Brews"
                            path="https://bootcampspot.com/"
                        />
                        <CardItem src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Restaurant Finder"
                            path="/contact"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="https://uploads.visitseattle.org/2015/07/01210133/FremontBrewing-SparklyPhotography-CMYK-900x600.jpg"
                            text="For Project 1, we have created app called Local Brews and users can use this app to find local Breweries!"
                            label="Project 1"
                            path="/"
                        />
                        <CardItem src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Project 2"
                            path="/contact"
                        />
                        <CardItem src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Project 2"
                            path="/contact"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="https://uploads.visitseattle.org/2015/07/01210133/FremontBrewing-SparklyPhotography-CMYK-900x600.jpg"
                            text="For Project 1, we have created app called Local Brews and users can use this app to find local Breweries!"
                            label="Project 1"
                            path="/"
                        />
                        <CardItem src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Project 2"
                            path="/contact"
                        />
                        <CardItem src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                            text="For Project 2, we have created Restaurant Finder where users can use the app to find local Restaurants!"
                            label="Project 2"
                            path="/contact"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;