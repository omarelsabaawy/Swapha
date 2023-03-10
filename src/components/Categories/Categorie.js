import React from "react";

import { Link } from "react-router-dom"

import image4 from './baner-right-image-04.jpg'
import ps from './ps.jpg';
import furn from './furniture.jpg';
import books from './books.jpg';

function Categrie() {
    return (
        <div>
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content" style={{ marginBottom: 20 }}>
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>SWAPHA now</h4>
                                        <span>Swap your needless item with an item you want.</span>
                                        <div class="main-border-button">
                                            <Link to="/swap">Swap Now!</Link>
                                        </div>
                                    </div>
                                    <img style={{ height: '647px' }} src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4 style={{ color: 'white' }}>Playstation Games</h4>
                                                    <span style={{ color: 'white' }}>Swap your game with another</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Playstation Games</h4>
                                                        <p>Make sure your old game is working well before swapping it.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Discover More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img style={{ maxHeight: '308px' }} src={ps} alt="image1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Furniture</h4>
                                                    <span>Swap your Furniture here</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Furniture</h4>
                                                        <p>Swap your Furniture if you can't afford its transportation.</p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Discover More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={furn} alt="image2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Shop Now!</h4>
                                                    <span>Don't like Swapping?</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Shop Now</h4>
                                                        <p>you now can buy the product you want if you don't like swapping a product with another.</p>
                                                        <div class="main-border-button">
                                                            <Link to="#">Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={books} alt="image4" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categrie;