import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// importing all pages
import Earth from "../../Pages/Earth/Earth"
import Jupiter from "../../Pages/Jupiter/Jupiter";
import Mercury from "../../Pages/Mercury/Mercury";
import Venus from "../../Pages/Venus/Venus";
import Mars from "../../Pages/Mars/Mars";
import Saturn from "../../Pages/Saturn/Saturn";
import Uranus from "../../Pages/Uranus/Uranus";
import Neptune from "../../Pages/Neptune/Neptune";

import Navbar from "../Navbar/Navbar";




const Router = () => {

    return (
            <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path="/"element={<Mercury/>}/>
            <Route path="venus" element={<Venus/>}/>
            <Route path="earth" element={<Earth/>}/>
            <Route path="mars" element={<Mars/>}/>
            <Route path="jupiter" element={<Jupiter/>}/>
            <Route path="saturn" element={<Saturn/>}/>
            <Route path="uranus" element={<Uranus/>}/>
            <Route path="neptune" element={<Neptune/>}/>
            </Routes>
            </BrowserRouter>
            </>
    )
}

export default Router