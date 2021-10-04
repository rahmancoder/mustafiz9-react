import React from 'react';
import About from '../About/About';
import PopularVideos from '../PopularVideos/PopularVideos';
import Services from '../Services/Services';
import SliderVideo from '../SliderVideo/SliderVideo';
import MyChart from '../MyChart/MyChart';
import Accordianhome from '../Accordianhome/Accordianhome';
import Backgroundhome from '../Backgroundhome/Backgroundhome';
import PopularService from '../PopularService/PopularService';
import SelectService from '../SelectService/SelectService';

const Home = () => {
    return (
        <div className="m-5">
            <h1 className="font-weight-bold text-warning"> Let's Learn and Explore </h1>
            <h2 className="text-secondary mb-5">    <blockquote>
                The three C’s are very important in these kinds of jobs. Firstly, it’s Concentration. The second ‘C’ is Calm. And the third ‘C’ is Control. When you lose control in competition, you are in danger.

            </blockquote></h2>

            <Backgroundhome></Backgroundhome>
            {/* <About></About>
            <Services></Services> */}
            {/* <SliderVideo></SliderVideo> */}
            {/* <MyChart></MyChart> */}

            <h1 className="mb-4 mt-4 text-warning"> Our  Popular Services </h1>
            <PopularService></PopularService>

            <PopularVideos></PopularVideos>


            <h1 className="mb-4 mt-4 text-warning"> FAQ - Frequently Ask Questions </h1>
            <Accordianhome></Accordianhome>


        </div>
    );
};

export default Home;