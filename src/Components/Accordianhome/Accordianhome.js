import React from 'react';
import { Accordion } from 'react-bootstrap';

import logoquestions from '../../images/questionsany.jpg'

const Accordianhome = () => {
    return (
        <div className="row d-flex mt-5">

            <div className="col-md-5">
                <img className="logoquestions w-75" src={logoquestions} alt="" />
            </div>

            <div className="col-md-7">


                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is E-learning ?</Accordion.Header>
                        <Accordion.Body>
                            The purpose of e-learning is to allow people to learn for personal accomplishment or to earn a professional degree, without physically attending a traditional university or academic
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I learn from here?</Accordion.Header>
                        <Accordion.Body>
                            The first advantage of e-learning is flexibility in terms of time and place. Learning content is usually made available in short modules and can be paused at any time. Whether you log on while commuting, at work or during your free time- the learning material can be easily made part of your daily routine.
                        </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Types of E-learning ?</Accordion.Header>
                        <Accordion.Body>
                            Lesson-based learning.
                            One-on-one learning.
                            Group learning.
                            Course-based learning.
                            Video-based learning.
                            Article-based learning.
                            Self-paced learning.
                            App-based learning.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Is there any Importance of our services ?</Accordion.Header>
                        <Accordion.Body>
                            E-learning allows students to study from any place where they have a stable internet access. It also allows them to study at any time they find comfortable. ... Moreover, this also allows students to organize their time more effectively
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Accordianhome;