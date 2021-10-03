import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Singleinstructor = (props) => {


    console.log(props.people);
    const { picture, instructor_name, Experience, about } = props.people || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Instructor Name: {instructor_name}</Card.Title>
                    <Card.Text>


                        ABout: {about}
                    </Card.Text>
                    <Card.Title>Experience:{Experience}</Card.Title>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Singleinstructor;