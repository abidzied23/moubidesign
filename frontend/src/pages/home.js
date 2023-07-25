import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './search';

const Home = () => {
    const [responseData, setResponseData] = useState([]);
    const [input1, setInput1] = useState('');

    const refreshData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/');
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

    // Handle the loading state when responseData is an empty array
    if (responseData.length === 0) {
        return <div>Loading...</div>;
    }




    return (
        <div class="design_section layout_padding">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="wrap">
                            <form action="http://localhost:3000/searchresult">
                                <div class="search">

                                    <input type="text" id="searchInput" class="searchTerm" placeholder="searh here" value={input1} onChange={(e) => setInput1(e.target.value)} />
                                    <button type="submit" class="searchButton" onClick={Search(input1)}>

                                        <i class="fa fa-search"></i>
                                    </button>

                                </div>
                            </form>
                        </div><br /><br />
                        <div class="container">
                            <h1 class="design_taital">Our Work Furniture</h1>
                            <p class="design_text">Shop our stylist's collection of must-have pieces for this season.
                                Favourites include easy-care aluminium, on-trend teak outdoor furniture, textured rope outdoor settings, and low-maintenance outdoor wicker furniture pieces.</p>

                            <div class="design_section_2">
                                <div class="row">
                                    {responseData.map((fur) => (
                                        <div class="col-md-4">
                                            <div class="box_main">
                                                <p class="chair_title">{fur.type}</p><br />

                                                <div class="image_3" href="#"><img src={fur.image_url} alt={fur.type} /></div>
                                                <br />
                                                <p class="chair_text">{fur.description}</p><br /><br />
                                                <p class="chair_price">{fur.price}$</p><br />
                                                <div class="buy_bt"> <button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'blue', border: 'none', backgroundColor: "hsl(194, 62%, 85%);", cursor: 'pointer' }}>
                                                    SEND
                                                </button></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>









    )
}

export default Home;