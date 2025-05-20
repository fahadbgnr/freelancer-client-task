import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const LoginPage = () => {
    const { loginUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const userData = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    photoURL: loggedUser.photoURL,
                    creationTime: loggedUser.metadata.creationTime,
                    lastSignInTime: loggedUser.metadata.lastSignInTime
                };

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Logged in with Google!",
                            icon: "success"
                        });
                        navigate(from, { replace: true });
                    });
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <div>
            <div className="max-w-md mx-auto p-6 bg-base-100 shadow-xl rounded-2xl mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                    />

                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>

                <p className="mt-4 text-center">
                    Don’t have an account?{" "}
                    <Link to="/signUp" className="text-blue-600 underline">Register</Link>
                </p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className="btn btn-outline btn-success w-full">
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default LoginPage;