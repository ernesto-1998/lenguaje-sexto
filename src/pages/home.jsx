import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { Section } from "../components/section"
import { games1, games2, games3, games4 } from "../utils/games";
import { movies1 } from "../utils/movies";
import { otros1, otros2, otros3 } from "../utils/otros";
import "./home.css";

export function Home() {
    const { contextUnit } = useContext(UnitContext);
    if(contextUnit === 1){
        return (
            <div className="body-container">
                <Section content={ games1 } text="Juegos"/>
                <Section content={ movies1 } text="Vídeos"/>
                <Section content={ otros1 } text="Otros"/>
            </div>
        );
    } 
    else if(contextUnit === 2){
        return (
            <div className="body-container">
                <Section content={ games2 } text="Juegos"/>
                <Section content={ otros2 } text="Otros"/>
            </div>   
        );
    } 
    else if(contextUnit === 3){
        return (
            <div className="body-container">
                <Section content={ games3 } text="Juegos"/>
                <Section content={ otros3 } text="Otros"/>
            </div>   
        );
    } 
    else if (contextUnit === 4){
        return (
            <div className="body-container">
                <Section content={ games4 } text="Juegos"/>
            </div>              
        );
    }
    else if (contextUnit >= 4){
        return (
            <h1 align="center">Esta unidad aun no está disponible! :(</h1>
        );
    }
}