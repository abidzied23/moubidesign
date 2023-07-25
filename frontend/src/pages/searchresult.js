import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Result = () => {
    const [responseData, setResponseData] = useState([]);

    const refreshRes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/searchresult');
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        refreshRes();
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

                        <div class="container">

                            <div class="design_section_2">
                                <div class="row">
                                    {responseData.map((fur) => (
                                        <div class="col-md-4">
                                            <div class="box_main">
                                                <p class="chair_text">{fur.type}</p><br />

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

export default Result;