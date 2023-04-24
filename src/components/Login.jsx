import React from 'react'

import {
	GoogleOAuthProvider,
	GoogleLogin,
	googleLogout,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {

    const navigate = useNavigate();

    const getUser = async(response) => {
        const decoded = jwt_decode(response.credential);
        localStorage.setItem('user', JSON.stringify(decoded));
        console.log(decoded);
        // const { name, picture, sub, email } = decoded;

        navigate("/", { replace: true });
    }

    return (
        <GoogleOAuthProvider clientId={process.env.GOOGLE_API_TOKEN}>
            <GoogleLogin
                onSuccess={(response) => getUser(response)}
                onFailure={() => console.log('Error')}
                cookiePolicy='single_host_origin'
                ux_mode='popup'
            />
            <div>Login</div>
        </GoogleOAuthProvider>
    );
}

export default Login
