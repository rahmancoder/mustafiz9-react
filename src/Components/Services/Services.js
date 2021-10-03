import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Allcourses from '../Allcourses/Allcourses';

const Services = () => {
    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./mustafizeducation.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));

    }, [])

    return (
        <div className="m-5">
            <h1>This is Services Components</h1>


            <div className="row m-3">

                {
                    allcourse.map(mustafiz =>
                        <Allcourses
                            key={mustafiz.index}
                            mustafiz={mustafiz}




                        ></Allcourses>

                    )
                }

            </div>

        </div>
    );
};

export default Services;