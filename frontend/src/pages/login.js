import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');


    const sendData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                Email: input1,
                Password: input2,

            });
            console.log(response.data); // Log the response data if needed
            // Reset the input values after successful submission

            setInput1('');
            setInput2('');

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <br />
            <br />

            <div class="container">
                <div class="login-box">
                    <h2>Login</h2>
                    <form onSubmit={sendData}>
                        <div class="user-box">
                            <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div class="user-box">
                            <input type="password" value={input2} onChange={(e) => setInput2(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'black', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                            SEND
                        </button>

                    </form>
                </div>
            </div>
            <br />
            <br />
        </div>


    )
}
export default Login;