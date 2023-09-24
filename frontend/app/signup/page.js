import Head from 'next/head';

function Signup() {
    return (
        <div>
            <Head>
                <title>User Signup Page</title>
            </Head>

            <form >
                <h1>USER SIGNUP PAGE</h1>
                <div >
                    <h2>First name: <input type="text" defaultValue="enter first name" /></h2>
                    <h2>Last name: <input type="text" defaultValue="enter last name" /></h2>
                    <h2>Email: <input type="email" defaultValue="abc@gmail.com" /></h2>
                    <h2>Password: <input type="password" defaultValue="password" /></h2>
                    <h2>Confirm password: <input type="password" defaultValue="password" /></h2>
                    <div>
                        <input type="checkbox" /> I accept the terms of use & privacy policy<br /><br />
                        <button>SIGN UP</button><br /><br />
                        Already have an account? <a href="/login">login here</a> {/* Updated the link to Next.js route */}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
