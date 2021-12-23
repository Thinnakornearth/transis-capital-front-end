import React from 'react';
import logo from '../../img/transis-logo.png'
import background from '../../img/blockchainBackground.jpg'
import Section2 from './Home2';
import Section3 from './Home3';
import Section4 from './Home4';
import Section5 from './Home5';
import Footer from '../Footer';
const Home = () => {
    return (

        <div className="home-container">
            <div className="section1" style={{backgroundImage: background}}>
            <div className="logo-container">
            <img src={logo} width="450" height="450" alt="transis's logo" className="logo" style={{  filter: "blur(0.03rem)"}}/>
            </div>
            <div className="text-line">
            <p className="text-logo">TRANSIS DIGITAL</p>
            <p>Decentrailize On-chain Asset Management</p>
            </div>
            </div>
            <br/><br/><br/>
            <Section2/>
            <br/><br/><br/>
            <Section3/>
            <br/><br/><br/><br/><br/>
            <Section4/>
            <Section5/>
            <Footer/>
        </div>

    )
}

export default Home;