import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { Section } from "../components/section"
import { games1 } from "../utils/games";
import { otros } from "../utils/otros";
import "./home.css";

export function Home() {
    const { contextUnit } = useContext(UnitContext);
    if(contextUnit === 1){
        return (
            <div className="body-container">
                <Section content={ games1 } text="Juegos"/>
                <Section content={ games1 } text="Vídeos"/>
                <Section content={ otros } text="Otros"/>
            </div>
        );
    } else if(contextUnit > 1){
        return <center><h1>Aun no esta disponible esta unidad :(</h1></center>
    }
}