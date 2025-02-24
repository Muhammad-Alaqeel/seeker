import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useNavigate,
    Navigate,
} from "react-router-dom";
import FavPage from './FavPage';
import Home from './Home';
import Home2 from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import FavouritePage from "./FavouritePage";
import BookmarkPage from "./BookmarkPage";
import Profile from "./Components/Home/Profile/Profile";
import Questions from "./question/Questions";
export default function App() {


    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token;
        return config;
    });
	const questions = ["what is data exploration? ", "what is data exploration? ", "what does QMV process involves? "]

    return (
        //  help us go to the page by put the name in search ex: ../favourites

        <Router>
            <Routes>
			<Route path="/" element={<Home />}></Route>
                <Route path="/courses" element={
				<div style={{ backgroundColor: "#ECF0F3" }}>
				<Home2 />
				</div>
				}></Route>
                <Route path="/favourites" element={
				<div style={{ backgroundColor: "#ECF0F3" }}>
				<FavouritePage />
				</div>
				}></Route>
                <Route path="/bookmarks" element={
				
				<div style={{ backgroundColor: "#ECF0F3" }}>
				<BookmarkPage />	
				</div>
				}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/*" element={<Navigate to={"/"} />}></Route>
                <Route path="/register" element={<Register />}></Route>
				<Route path="/questions" element={
				<div style={{ backgroundColor: "#ECF0F3" }}>
				<Questions questions={questions}/>
				</div>
				}></Route> 
                <Route path="/profile" element={<Profile/>} />
   
            </Routes>
        </Router>
    );
}
