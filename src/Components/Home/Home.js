import React from 'react';
import Header from './Home/Header';
import Navigation from './../Share/Navigation/Navigation';
import HeaderBennar from './Home/HeaderBennar';
import OurService from './OurService/OurService';
import HomeBenner2 from './Home/HomeBenner2/HomeBenner2';
import Testimonials from './Home/Testimonials/Testimonials';
import Fooders from './Home/Fooder/Fooders';
import Message from './Home/Message/Message';


const Home = () => {
    return (
        <div>
         
           <HeaderBennar></HeaderBennar>
           <OurService></OurService>
           <HomeBenner2></HomeBenner2>
           <Testimonials></Testimonials>
           <Message></Message>
           <Fooders></Fooders>
          
         
        </div>
    );
};

export default Home;