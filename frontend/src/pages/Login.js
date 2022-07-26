import {useState} from 'react'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`Email: ${email} - Password: ${password}`);
    }

    return(
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email:</label>
            <input 
                type="email"
                onChange={ (e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>Password:</label>
            <input 
                type="password"
                onChange={ (e) => setPassword(e.target.value)}
                value = {password}
            />
            <button onClick={handleSubmit}>Log in</button>
        </form>
    )
};

export default Login;