import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Allcourses from '../Allcourses/Allcourses';
import PopularService from '../PopularService/PopularService';

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
            <h1 className="text-warning"> Our Services </h1>


            <div className="row m-3">

                {/* passing props to allcourse component */}

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