import "./header.css";
import { Title } from "./title";
import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";

export function Header() {
    const { contextUnit, setContextUnit } = useContext(UnitContext);
    const unidades = ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5", "Unidad 6", "Unidad 7", "Unidad 8"];
    return (
        <header>
            <Title text="Material Multimedia Lenguaje 6° Grado"/>
            <div className="aside">
                { "Unidad " + contextUnit }
            </div>
            <nav>
                <ul className="nav-menu">
                    { unidades.map( (unidad, index) => {
                        return <li onClick={() => setContextUnit(index+1)} key={index} className="nav-li">{ unidad }</li>
                    }) }
                </ul>
            </nav>
        </header>
    );
}