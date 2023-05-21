import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { Section } from "../components/section"
import { games1 } from "../utils/games";
import "./home.css";

export function Home() {
    const { contextUnit } = useContext(UnitContext);
    if(contextUnit === 1){
        return (
            <div className="body-container">
                <Section games={ games1 } text="Juegos"/>
                <Section games={ games1 } text="Vídeos"/>
                <Section games={ games1 } text="Otros"/>
            </div>
        );
    } else if(contextUnit > 1){
        return <center><h1>Aun no esta disponible esta unidad :(</h1></center>
    }
}