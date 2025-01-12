// app/context/AuthContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    // 初始化時從 cookie 或 localStorage 讀取 token
    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            setAuthToken(token);
        }
    }, []);

    const login = (token) => {
        setAuthToken(token);
        localStorage.setItem('auth_token', token);
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('auth_token');
    };


    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
