import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="d-flex  mt-4 ">
                <div className="col-md-5 mt-4 mx-3">
                    <h5>E-Learning with Mustafiz</h5>
                    <p>As a learning and development solution, EdApp has always been passionate about enhancing the learning experience, and making it accessible to everyone. Rewrite The Playbook, EdApp’s free virtual summit, brought together thought leaders and experts in the L&D space to share inspirational stories and practical insights to help reshape the future of learning</p>
                </div>
                <div className="mt-4">
                    <h5>CONTACT US</h5>
                    <p><i class="far fa-envelope-open"></i> EMAIL:sayhemrahman@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i> Phone:+8801871414746</p>
                    <p><i class="fas fa-map-marker-alt"></i> Address:Dhaka, Bangladesh</p>
                    <p><i class="fas fa-fax"></i> Fax:www.sayhemrahman.com</p>
                </div>
                <div className="mt-4">
                    <h5>INFORMATION</h5>
                    <p>Online course</p>
                    <p>Offline course</p>
                    <p>Free course</p>
                    <p>Paid course</p>

                </div>
                <div className="mt-4">
                    <h5>COMPANY</h5>
                    <p>My account</p>
                    <p>Videos</p>
                    <p>Networking</p>
                    <p>Machine Learning</p>
                    <p>Programming with Mustafiz</p>
                </div>

            </div>
            <hr />
            <p>Created by © MD Mustafizur Rahman  <a href="https://www.youtube.com/channel/UCU_GV9uLrxHl4-1WkTPzr1g" target="_blank">(Sayhem Rahman)</a> Youtube). All rights reserved</p>

        </div>
    );
};

export default Footer;