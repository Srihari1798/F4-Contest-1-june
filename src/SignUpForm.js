import React, { useState } from 'react'
import './SignUp.css';

export default function SignUpForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setIsSuccess(false);
        } else {
            setErrors([]);
            setIsSuccess(true);
            console.log({email, name, password, confirmPassword });
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    const validateForm = () => {
        const errors = [];
        
        if (!name) {
            errors.push('Name field is required');
        }
        if (!email) {
            errors.push('Email field is required');
        }
        if (!password) {
            errors.push('Password field is required');
        }
        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }
        return errors;
    };
   
    return (
        <div>
            <h1 className='header'>SignUp</h1>
            <form onSubmit={submitHandler}>
                <div>

                    <input type='text'
                        id="FullName"
                        name='FullName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='FULLNAME'
                        /> <br/>

                    <input type='email'
                        name='email'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='EMAIL'

                    /> <br />

                    <input type='password'
                        name='password'
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='PASSWORD'
                    />

                    <br />

                    <input type='password'
                        name='confrimPassword'
                        id="confrimPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='CONFRIM PASSWORD'
                    /> <br />

                    <button type="submit" className='btn1' name="button">SignUp</button>

                </div>

                {errors.length > 0 && (
                    <div className="error">
                        <ul>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                 {isSuccess && <div className="success">successfully Signed Up!</div>}
                {!isSuccess && errors.length === 0 && <div className="error">ERROR:All fields are required.</div>} 
            </form>

        </div>
    )
}


