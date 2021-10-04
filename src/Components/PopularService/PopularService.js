import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SelectService from '../SelectService/SelectService';

const PopularService = (props) => {

    // console.log(props.mustafiz);
    // const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};


    // console.log(props.mustafiz);
    // const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};    const [allcourse, setAllcourse] = useState([]);

    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./selectedservices.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));

    }, [])


    return (
        <div>


            <div className="row m-3">

                {/* passing props to allcourse component */}

                {
                    allcourse.map(mustafiz =>
                        <SelectService
                            key={mustafiz.index}
                            mustafiz={mustafiz}

                        ></SelectService>

                    )
                }



            </div>
            <Button className="mt-4 " variant="outline-warning">
                {/* <Link to="/about"></Link> */}
                <Link className="text-decoration-none" to="/services">View All Services</Link>


            </Button>
        </div>
    );
};

export default PopularService;