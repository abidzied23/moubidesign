import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

const Home = () => {
    console.log("home page .........");
    const [products, setProducts] = useState([]);

    // Fetch data from your API using Axios
    useEffect(() => {
        console.log("?? Getting data");
        axios.get('http://localhost:3000')
            .then((response) => {
                console.log("Response ", response);
                setProducts(response.data)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    if (products === null) {
        return <div>Loading...</div>;
    }

    if (products.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product._id} className="product-item">
                        <img src={product.image_url} alt={product.description} />
                        <h3>{product.type}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;