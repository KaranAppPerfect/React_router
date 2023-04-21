import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {

        const navigate = useNavigate();

    return (
        <>
            <h1> Order Placed </h1>
            <button onClick={() => navigate(-1)}> Back </button>
        </>
    );
};

export default OrderDetails;