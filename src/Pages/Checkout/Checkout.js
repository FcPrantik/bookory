import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const Checkout = () => {

    const { bookID } = useParams();
    const [book, setBook] = useState({})
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://evening-cliffs-53106.herokuapp.com/book/${bookID}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])

    const handlePlaceOrder = () => {
        const order = {
            email: user.email,
            bookID: bookID,
            book: book.name,
            picture: book.img,
            author: book.author,
            price: book.price
        }
        axios.post('https://evening-cliffs-53106.herokuapp.com/order', order)
            .then(response => {
                response && toast("Your Order is Booked")
                // const data = response;
                // if(data.insertedId){
                //     toast('Your Order is booked');
            }
            )
    }

    return (
        <div>
            <Container>
                <h4 className='fw-bold'>Checkout</h4>
                <table className="table padding shadow p-3 mb-5 bg-body rounded mt-3">
                    <thead>
                        <tr>
                            <th scope="col" className='col-8 text-secondary'>Description</th>
                            <th scope="col" className='col-3 text-secondary'>Quantity</th>
                            <th scope="col" className='col-2 text-secondary'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-primary'>{book.name}</td>
                            <td className='text-primary'>1</td>
                            <td className='text-primary'>${book.price}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className='fw-bold'>Total</td>
                            <td className='fw-bold'>${book.price}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="float-end btn btn-success" onClick={handlePlaceOrder}>Checkout</button>
                    <ToastContainer />
                </div>
            </Container>
        </div>
    );
};

export default Checkout;