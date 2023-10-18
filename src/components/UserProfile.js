import React from 'react';
import './UserProfile.css';

function UserProfile() {
    return (
        <div className="user-profile-content">
            <img className="profile-picture" src="/path-to-user-profile-pic.jpg" alt="User Profile" />
            <h1>User Name</h1>
            <p>Welcome to your profile! Here, you can manage your settings, view your activity, and more.</p>
            <div className="profile-options">
                <a href="/profile/settings">Settings</a>
                <a href="/profile/activity">Activity</a>
                <a href="/logout">Logout</a>
            </div>
        </div>
    );
}

export default UserProfile;
