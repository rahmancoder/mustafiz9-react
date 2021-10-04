import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PopularService = (props) => {

    // console.log(props.mustafiz);
    const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Course {course_name}</Card.Title>
                    <Card.Text>


                        ABout: {about}
                    </Card.Text>
                    <Card.Title>Price ${price}</Card.Title>
                    <Card.Title>Instructor Name: {course_instructor}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PopularService;