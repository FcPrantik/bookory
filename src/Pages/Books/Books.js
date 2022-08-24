import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Books = (props) => {

    const { name, price, img, author, _id } = props.book;

    return (

        <Row>
            <Col>
                <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '24rem' }}>
                    <Card.Img variant="top" className='w-75 mx-auto' src={img} style={{ height: "400px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <Link to={`/book/${_id}`}>
                            <Button variant="primary">Buy Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default Books;