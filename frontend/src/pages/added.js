import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Added = () => {
    const responseData = []
    console.log("executed")

    const refreshData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/added');

            responseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('useEffect is running');
        refreshData();
    }, []);
    if (responseData.length === 0) {
        return <div>Loading...</div>;
    }
}
export default Added;