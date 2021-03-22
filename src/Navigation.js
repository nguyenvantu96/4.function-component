import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Main from "./Main";
export default function Navigation() {
    return (
        <Router>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
        </Router>
    );
}
const About =()=> 
<div>Đây là trang giới thiệu</div>
