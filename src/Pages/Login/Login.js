import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, processSignIn, handleEmail, handlePassword } = useAuth();
    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={processSignIn}>
                        <h3 className='mt-5'>Sign In</h3>
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
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label ms-2" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <button
                                onClick={signInUsingGoogle}
                                className="btn btn-success">
                                Google
                            </button>
                        </div>
                        <p className="forgot-password text-left mb-5">
                            Don't have account?
                            <Link to='/register'>Create Account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;