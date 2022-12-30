import React from 'react';
import NavBar from '../NavBar/Navbar';
import Breadcrumb from '../Standards/Breadcrumb';
import SwapItems from '../Standards/SwapItems';
import Footer from '../Standards/Footer'
import ChatBot from '../ChatBot/ChatBot';
function SwapScreen() {
    return (
        <div>
            <NavBar />
            <Breadcrumb type="Swap" />
            <SwapItems />
            <ChatBot />
            <Footer />
        </div>
    )
}

export default SwapScreen