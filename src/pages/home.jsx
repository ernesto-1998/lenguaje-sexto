import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { Section } from "../components/section"
import { games1, games2, games3, games4, games5, games6, games7, games8 } from "../utils/games";
import { movies1, movies3 } from "../utils/movies";
import { otros1, otros2, otros3, otros6, otros7, otros8 } from "../utils/otros";
import "./home.css";

export function Home() {
    const { contextUnit } = useContext(UnitContext);
    if(contextUnit === 1){
        return (
            <div className="body-container">
                <Section content={ games1 } text="Juegos"/>
                <Section content={ movies1 } text="Vídeos"/>
                <Section content={ otros1 } text="Infografías"/>
            </div>
        );
    } 
    else if(contextUnit === 2){
        return (
            <div className="body-container">
                <Section content={ games2 } text="Juegos"/>
                <Section content={ otros2 } text="Infografías"/>
            </div>   
        );
    } 
    else if(contextUnit === 3){
        return (
            <div className="body-container">
                <Section content={ games3 } text="Juegos"/>
                <Section content={ movies3 } text="Vídeos"/>
                <Section content={ otros3 } text="Actividades"/>
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
    else if (contextUnit === 5){
        return (
            <div className="body-container">
                <Section content={ games5 } text="Juegos"/>
            </div>              
        );
    }
    else if (contextUnit === 6){
        return (
            <div className="body-container">
                <Section content={ games6 } text="Juegos"/>
                <Section content={ otros6 } text="Infografías"/>
            </div>              
        );
    }
    else if (contextUnit === 7){
        return (
            <div className="body-container">
                <Section content={ games7 } text="Juegos"/>
                <Section content={ otros7 } text="Actividades"/>
            </div>              
        );
    }
    else if (contextUnit === 8){
        return (
            <div className="body-container">
                <Section content={ games8 } text="Juegos"/>
                <Section content={ otros8 } text="Ejemplos"/>
            </div>              
        );
    }
}