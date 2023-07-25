import React, { useState } from 'react';
import axios from 'axios';
const Contact = () => {


    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');

    const sendData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/contact', {
                Name: input1,
                Email: input2,
                Password: input3,
                Phone_Number: input4,
                Massage: input5
            });
            console.log(response.data); // Log the response data if needed
            // Reset the input values after successful submission
            setInput1('');
            setInput2('');
            setInput3('');
            setInput4('');
            setInput5('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div class="contact_section layout_padding">
            <div class="container">
                <div class="contact_section_2">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mail_section_1">
                                <h1 class="contact_taital">Contact Us</h1>
                                <form onSubmit={sendData}>
                                    <input type="text" class="mail_text" placeholder="Name" value={input1} onChange={(e) => setInput1(e.target.value)} />
                                    <input type="text" class="mail_text" placeholder="Email" value={input2} onChange={(e) => setInput2(e.target.value)} />
                                    <input type="password" class="mail_text" placeholder="Password" value={input3} onChange={(e) => setInput3(e.target.value)} />
                                    <input type="text" class="mail_text" placeholder="Phone Number" value={input4} onChange={(e) => setInput4(e.target.value)} />
                                    <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment"
                                        value={input5} onChange={(e) => setInput5(e.target.value)}></textarea>
                                    <div class="send_bt"><button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'blue', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                                        SEND
                                    </button></div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="map_main">
                                <div class="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&amp;q=Eiffel+Tower+Paris+France"
                                        width="600"
                                        height="360"
                                        frameBorder="0"
                                        style={{ border: 0, width: '100%' }}
                                        allowFullScreen
                                        title="Google Maps - Eiffel Tower"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Contact;