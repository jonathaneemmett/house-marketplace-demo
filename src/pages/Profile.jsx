import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth';

function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });

    const {name, email} = formData;

    const onLogOut = () => {
        auth.signOut();
        navigate('/');
    }
    return (
        <div className="profile">
            <header className="profileHeader">
                <p className="pageHeader">My Profile</p>
                <button type="button" onClick={onLogOut} className="logOut">Logout</button>
            </header>
        </div>
    );
}

export default Profile;