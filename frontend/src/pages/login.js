const Login = () => {
    return (
        <div>
            <br />
            <br />

            <div class="container">
                <div class="login-box">
                    <h2>Login</h2>
                    <form>
                        <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
                            <label>Password</label>
                        </div>
                        <button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'blue', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                            Submit
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