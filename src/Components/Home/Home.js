import React from 'react';
import About from '../About/About';
import PopularVideos from '../PopularVideos/PopularVideos';
import Services from '../Services/Services';
import SliderVideo from '../SliderVideo/SliderVideo';
import MyChart from '../MyChart/MyChart';
import Accordianhome from '../Accordianhome/Accordianhome';
import Backgroundhome from '../Backgroundhome/Backgroundhome';

const Home = () => {
    return (
        <div className="m-5">
            <h1 className="font-weight-bold">This is Home Components</h1>
            <blockquote>


                For people who work at the top end under pressure, the three C’s are very important in these kinds of jobs. Firstly, it’s Concentration. The second ‘C’ is Calm. And the third ‘C’ is Control. When you lose control in competition, you are in danger.


            </blockquote>

            <Backgroundhome></Backgroundhome>
            {/* <About></About>
            <Services></Services> */}
            {/* <SliderVideo></SliderVideo> */}
            {/* <MyChart></MyChart> */}
            <PopularVideos></PopularVideos>

            <Accordianhome></Accordianhome>


        </div>
    );
};

export default Home;