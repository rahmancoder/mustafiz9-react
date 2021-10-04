import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="d-flex  mt-4">
                <div className="col-md-5 mt-4">
                    <h4>E-Learning with Mustafiz</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi maiores quae officiis iure nemo excepturi sunt possimus rerum, quam natus?</p>
                </div>
                <div className="mt-4">
                    <h4>CONTACT US</h4>
                    <p><i class="far fa-envelope-open"></i> EMAIL:sayhemrahman@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i> Phone:+8801871414746</p>
                    <p><i class="fas fa-map-marker-alt"></i> Address:Dhaka, Bangladesh</p>
                    <p><i class="fas fa-fax"></i> Fax:www.sayhemrahman.com</p>
                </div>
                <div className="mt-4">
                    <h4>INFORMATION</h4>
                    <p>Online course</p>
                    <p>Offline course</p>
                    <p>Free course</p>
                    <p>Paid course</p>

                </div>
                <div className="mt-4">
                    <h4>COMPANY</h4>
                    <p>My account</p>
                    <p>Videos</p>
                    <p>Networking</p>
                    <p>Machine Learning</p>
                    <p>Programming with Mustafiz</p>
                </div>

            </div>

            <p>Created by © MD Mustafizur Rahman  <a href="https://www.youtube.com/channel/UCU_GV9uLrxHl4-1WkTPzr1g" target="_blank">(Sayhem Rahman)</a> Youtube). All rights reserved</p>

        </div>
    );
};

export default Footer;