import React, { useContext } from "react";
import './InfoButtons.scss'

import { DataToDisplay } from "../Main/Main";

const InfoButtons = ({planetData}) => {
    // getting the state from useContect and then applying it to the component
    const {data, setData} = useContext(DataToDisplay)



    return (
        <div className="info-container">
        <div className="info-buttons-container">
            <div className="button-container">
                <button 
                aria-label="click to see overview"
                style={data === "overview" && window.innerWidth >= 768 ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("overview")}>OVERVIEW
                </button>
                <span style={data === "overview" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button 
                aria-label="click to see structure"
                style={data === "structure" && window.innerWidth >= 768 ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("structure")}>STRUCTURE
                </button>
                <span style={data === "structure" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button 
                aria-label="click to see surface"
                style={data === "surface" && window.innerWidth >= 768  ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("surface")}>SURFACE
                </button>
                <span style={data === "surface" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
        </div>
            <span className="large-gray-line"></span>
        </div>
    )
}
export default InfoButtons