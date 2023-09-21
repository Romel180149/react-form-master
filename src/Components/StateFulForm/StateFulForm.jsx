import React, { useState } from 'react';

const StateFulForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(null);
    const handleSubmit = e =>{
       e.preventDefault();
       if(password.length<6){
        setError('Password must be at leasr 6 character')
       }
       else{
        setError('');
        console.log(name,email,password);
       }
    //    console.log(,name,email,password);
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
        
        
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
        
        
    }
    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value)
        
        
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                 type="text" name='name' /> <br />
                <input onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br /> 
                <input onChange={handlePasswordChange}
                 type="password" name='password' /> <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;