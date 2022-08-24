import React from 'react';
import { Row } from 'react-bootstrap';
import useBooks from '../../hooks/useBooks';
import Books from '../Books/Books';

const Home = () => {

    const [books] = useBooks();

    return (
        <div className='container'>
            <Row  sm={1} md={2} lg={3} className='justify-content-lg-between'>
            {
                    books.map(book => <Books
                        key={book._id}
                        book={book}
                    >
                    </Books>)
                }
            </Row>
        </div>
    );
};

export default Home;