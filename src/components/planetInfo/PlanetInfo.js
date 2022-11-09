import React, { useContext } from "react";

import sourceIcon from "../../assets/icon-source.svg"

import './PlanetInfo.scss'

import { DataToDisplay } from "../Main/Main";




const PlanetInfo = ({planetData}) => {

const overview = <>
<h1 aria-label="planet name" className="planet-name">{planetData.name.toUpperCase()}</h1>
<p aria-label="about planet overview" className="planet-content">{planetData.overview.content}</p>
<p aria-label="link to source" className="source">Source : <a href={planetData.overview.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

const structure = <>
<h1 aria-label="planet name" className="planet-name">{planetData.name.toUpperCase()}</h1>
<p aria-label="about planet structure" className="planet-content">{planetData.structure.content}</p>
<p aria-label="link to source" className="source">Source : <a href={planetData.structure.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

const geology = <>
<h1 aria-label="planet name" className="planet-name">{planetData.name.toUpperCase()}</h1>
<p aria-label="about planet geology" className="planet-content">{planetData.geology.content}</p>
<p aria-label="link to source" className="source">Source : <a href={planetData.geology.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

    const {data, setData} = useContext(DataToDisplay)

    return (
        <div className="planet-text-container">
            {(() => {
                if (data === "overview"){
                    return (overview)
                }
                else if (data === "structure"){
                    return (structure)
                }
                else return (geology)
            })()}
        </div>
    )
}


export default PlanetInfo