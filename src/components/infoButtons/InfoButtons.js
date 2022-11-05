import React, { useContext } from "react";
import './InfoButtons.scss'

import { DataToDisplay } from "../Main/Main";

const InfoButtons = ({planetData}) => {

    const {data, setData} = useContext(DataToDisplay)

    return (
        <div>
        <div className="info-buttons-container">
            <div className="button-container">
                <button onClick={() => setData("overview")}>OVERVIEW</button>
                <span style={data === "overview" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button onClick={() => setData("structure")}>STRUCTURE</button>
                <span style={data === "structure" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button onClick={() => setData("surface")}>SURFACE</button>
                <span style={data === "surface" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
        </div>
            <span className="large-gray-line"></span>
        </div>
    )
}

export default InfoButtons