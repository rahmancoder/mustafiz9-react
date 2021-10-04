import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const PopularService = (props) => {

    // console.log(props.mustafiz);
    // const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};


    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./mustafizeducation.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));

    }, [])


    return (
        <div>


            {
                allcourse.map(mustafiz =>



                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mustafiz.picture} />
                        <Card.Body>
                            <Card.Title>Course {mustafiz.course_name}</Card.Title>
                            <Card.Text>


                                ABout: {mustafiz.about}
                            </Card.Text>
                            <Card.Title>Price ${mustafiz.price}</Card.Title>
                            <Card.Title>Instructor Name: {mustafiz.course_instructor}</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};

export default PopularService;