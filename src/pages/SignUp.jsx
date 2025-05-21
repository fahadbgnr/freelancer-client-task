
import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser, googleSignIn, user } = use(AuthContext);
   const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        createUser(email, password)
            .then((result => {
                console.log(result.user)

                const newUser = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }


                fetch('https://freelance-task-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(newUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Your Account is Created.",
                                icon: "success",
                                draggable: true
                                
                            });
                             
                        }
                    })
            }))
            .catch(error => {
                console.log(error)
            })
            navigate(from, { replace: true });
    };



      const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const userData = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    photoURL: loggedUser.photoURL,
                    creationTime: loggedUser.metadata.creationTime,
                    lastSignInTime: loggedUser.metadata.lastSignInTime,
                };

                fetch('https://freelance-task-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Logged in with Google!",
                                icon: "success"
                            });
                            navigate(from, { replace: true });

                        }
                    });
            })
            .catch((error) => {
                console.error('Google Sign-in Error:', error);
            });
    };



    return (
        <div className="max-w-md mx-auto p-6 bg-base-100 shadow-xl rounded-2xl mt-10">
             <Helmet>
                    <title>SignUp</title>
                </Helmet>
            <h2 className="text-2xl font-bold mb-4 text-center">SignUp</h2>
            <form onSubmit={handleSignUp} className="space-y-4">
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={user?.name}
                    className="input input-bordered w-full"
                    readOnly
                    
                    required />

                <input
                    name="email"
                    type="email"
                    value={user?.email}
                    placeholder="Email"
                    className="input input-bordered w-full"
                    readOnly
                    required />

                <input
                    name="photoURL"
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    required />

                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    className="input input-bordered w-full"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    required />



                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>

            <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/loginPage" className="text-blue-600 underline">Login</Link>
            </p>

            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-success w-full">
                Continue with Google
            </button>
        </div >
    );
};

export default SignUp;