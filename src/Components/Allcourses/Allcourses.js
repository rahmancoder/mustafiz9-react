import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Allcourses = (props) => {

    console.log(props.mustafiz);
    const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};
    return (
        <div className="col-md-4 mt-4 ">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title> <span className="text-warning"> Course Name:-</span> {course_name}</Card.Title>
                    <Card.Text>


                        <span className="text-info"> About Course:-</span> : {about}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Price $-</span>{price}</Card.Title>
                    <Card.Title><span className="text-danger font-weight-bold"> Instructor Name:-</span> {course_instructor}</Card.Title>
                    <Button variant="primary">Buy Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Allcourses;