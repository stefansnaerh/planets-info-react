
import InfoButtons from "../infoButtons/InfoButtons";
import Statistics from "../statistics/Statistics";
import PlanetInfo from "../planetInfo/PlanetInfo";
import PlanetImage from "../planetImage/PlanetImage";
import { createContext } from "react";
import { useState } from "react";


// createContext to pass state down the component tree
export const DataToDisplay = createContext()


const Main = ({planetData}) => {

    const [data, setData] = useState("overview")

    return (
        <main>
            <DataToDisplay.Provider value={{data, setData}}>
            <InfoButtons
            planetData={planetData}
            />
            <PlanetImage
            planetData={planetData}
            />
            <PlanetInfo
            planetData={planetData}
            />
            <Statistics
            planetdata={planetData}
            />
            </DataToDisplay.Provider>
        </main>
    )
}

export default Main