import React, { useContext } from "react";

import sourceIcon from "../../assets/icon-source.svg"

import './PlanetInfo.scss'

import { DataToDisplay } from "../Main/Main";




const PlanetInfo = ({planetData}) => {

const overview = <>
<img alt="planet" className="planet-image" src={planetData.overview.image}></img>
<h1 className="planet-name">{planetData.name.toUpperCase()}</h1>
<p className="planet-content">{planetData.overview.content}</p>
<p className="source">Source : <a href={planetData.overview.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

const structure = <>
<img alt="planet" className="planet-image" src={planetData.structure.image}></img>
<h1 className="planet-name">{planetData.name.toUpperCase()}</h1>
<p className="planet-content">{planetData.structure.content}</p>
<p className="source">Source : <a href={planetData.structure.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

const geology = <>
<img alt="planet" className="planet-image" src={planetData.overview.image}></img>
<img alt="planet" className="planet-surface-image" src={planetData.geology.image}></img>
<h1 className="planet-name">{planetData.name.toUpperCase()}</h1>
<p className="planet-content">{planetData.geology.content}</p>
<p className="source">Source : <a href={planetData.geology.source}>Wikipedia</a><img alt="src-icon" src={sourceIcon}/></p>
</>

    const {data, setData} = useContext(DataToDisplay)

    return (
        <section>
            {(() => {
                if (data === "overview"){
                    return (overview)
                }
                else if (data === "structure"){
                    return (structure)
                }
                else return (geology)
            })()}
        </section>
    )
}


export default PlanetInfo