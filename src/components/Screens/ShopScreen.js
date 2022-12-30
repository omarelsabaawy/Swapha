import React from 'react'
import NavBar from '../NavBar/Navbar'
import Breadcrumb from '../Standards/Breadcrumb'
import BuyItems from '../Standards/BuyItems'
import Footer from '../Standards/Footer'
import ChatBot from '../ChatBot/ChatBot'

function ShopScreen() {
    return (
        <div>
            <NavBar />
            <Breadcrumb type="Buy Now" />
            <BuyItems />
            <ChatBot />
            <Footer />
        </div>
    )
}

export default ShopScreen