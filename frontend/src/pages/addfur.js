import React, { useState } from 'react';
import axios from 'axios';

const AddFur = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const sendData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/addfur', {
                type: input1,
                description: input2,
                image_url: input3,
                price: input4
            });
            console.log(response.data); // Log the response data if needed
            // Reset the input values after successful submission
            setInput1('');
            setInput2('');
            setInput3('');
            setInput4('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={sendData}>
                <label>Title:</label>
                <br />
                <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <br />
                <label>Description:</label>
                <br />
                <textarea
                    id="content"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    rows="5"
                    cols="50"
                    required
                ></textarea>
                <br />
                <label>Photo:</label>
                <br />
                <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
                <br />
                <label>Price:</label>
                <br />
                <input type="text" value={input4} onChange={(e) => setInput4(e.target.value)} />
                <br />
                <br />
                <input type="submit" id="ok" name="submit" />
                <br />
            </form>
        </div>
    );
};

export default AddFur;