import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Order.css';

const Order = (props) => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect( () => {

        const getOrders = async() =>{
            const email = user.email;
            const url = `https://evening-cliffs-53106.herokuapp.com/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    },[user])

    return (
        <div className='container'>
            <h1 className='mb-5'>Your Orders</h1>
            {
                orders.map(order=>
                <div className='order shadow p-3'>
                    <img style={{ height: "100px" }} src={order.picture} alt="" />
                    <h3>{order.book}</h3>
                    <h2 className='text-primary'>${order.price}</h2>
                </div>
                )
            }
        </div>
    );
};

export default Order;