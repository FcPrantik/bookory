import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { handleEmail, handlePassword, handleRegistration, handleName } = useAuth();

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleRegistration}>
                    <h3 className='mt-5'>Creat an account</h3>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            onBlur={handleName}
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            onBlur={handleEmail}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            onBlur={handlePassword}
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right mb-5">
                        Already have an account?
                        <Link to='/login'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;