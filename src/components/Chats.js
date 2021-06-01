import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { ChatEngine } from "react-chat-engine"
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext"
import axios from 'axios';
const Chats = () => {

    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)

    console.log(user)

    const handleLogout = async () => {
        await auth.signOut();

        history.push("/")
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpeg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!user) {
            history.push("/")
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "projectId": "3d36534b-d985-4129-98a1-c06558de09f1",
                "user-name": user.email,
                "user=secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formData = new FormData();
                formData.append('email', user.email)
                formData.append('username', user.displayName)
                formData.append('secret', user.uid)
            })
    }, [user, history])
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="3d36534b-d985-4129-98a1-c06558de09f1"
                username="."
                userSecret="."
            />
        </div>
    )
}

export default Chats
