import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useNavigate,
    Navigate,
} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import FavouritePage from "./FavouritePage";
import BookmarkPage from "./BookmarkPage";

export default function App() {


    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token;
        return config;
    });
    return (
        //  help us go to the page by put the name in search ex: ../favourites

        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/favourites" element={<FavouritePage />}></Route>
                <Route path="/bookmarks" element={<BookmarkPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/*" element={<Navigate to={"/"} />}></Route>
                <Route path="/register" element={<Register />}></Route>

            </Routes>
        </Router>
    );
}
