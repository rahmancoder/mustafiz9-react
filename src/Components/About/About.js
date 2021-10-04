import React from 'react';
import Instructor from '../Instructor/Instructor';

const About = () => {
    return (
        <div className="m-5">
            <h1 className="text-warning"> About Our Company</h1>
            <p>
                Hey, This Company is Mainly for Educational Purpose. Basic Engineering Topics will be covered.
                Both Theoretical and Practical Knowledge will be discussed parallelly. We will try to deep down in Every topics.
                If you guys have any problem please  let me know through comments or email and share your idea ,how you guys are benefited after watching the video lecture. Thank you.
                Here, Computer Science and Engineering Topics and Electrical Engineering Topics also be Published regularly.

                Deep learning is a subset of machine learning, which in turn is a subset of artificial intelligence, but the origins of these names arose from an interesting history. In addition, there are fascinating technical characteristics that can differentiate deep learning from other types of machine learning...essential working knowledge for anyone with ML, DL, or AI in their skillset.

                If you are looking to improve your skill set or steer business/research strategy in 2021, you may come across articles decrying a skills shortage in deep learning. A few years ago, you would have read the same about a shortage of professionals with machine learning skills, and just a few years before that the emphasis would have been on a shortage of data scientists skilled in “big data.”
            </p>
            <Instructor></Instructor>
        </div>
    );
};

export default About;