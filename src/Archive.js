import React, {useState} from 'react'

function Archive() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        }

        setUser(userData);
        setUsername("");
        setPassword("");
    }


    return (
        <div>
            <h1>Archive</h1>
            <h1>Login</h1>
            <form  onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' 
                       onChange={(e) => setUsername(e.target.value)}  
                       value={username} 
                /><br/>
                <input type='password' placeholder='Password' 
                       onChange={(e) => setPassword(e.target.value)}  
                       value={password} 
                /><br/>
                <button type='submit'>Login</button>
            </form>

            {/* {user && JSON.stringify(user, null, 100)} */}
            {user && <div>{user.username} <br/> {user.password} </div>}

        </div>
    )
    
}

const formStyle = {
    textAlign: 'center',

}


export default Archive;
