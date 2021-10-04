import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logobackground from '../../images/Backgroundimage.jpg';

const Backgroundhome = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img className="logobackground w-100" src={logobackground} alt="" />
            </div>
            <div className="col-md-6 mt-5 text-success">
                <p className="text-monospace text-primary">

                    Welcome to Our Community!!
                    We are Offer you Instant help at any time about your Study problem.
                    Our Instructor and Team are Very Much Dedicated to solve your problem.
                    You just need to ask what is your problem and how can we help you.
                    Our Instructor can help you out . There are more services on Our Company.
                    If you would like to professionally skilled we are offereing you with some bootcamp,
                    waivner and free session where you can ask anything and our Dedicated team will answer your Question.

                </p>
                <Button className="mt-4 " variant="outline-dark">
                    {/* <Link to="/about"></Link> */}
                    <Link className="text-decoration-none" to="/about">About US?</Link>


                </Button>
            </div>
        </div>
    );
};

export default Backgroundhome;