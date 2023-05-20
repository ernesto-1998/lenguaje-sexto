import "./header.css"
import { Title } from "./title";

export function Header() {
    const unidades = ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5", "Unidad 6", "Unidad 7", "Unidad 8"];
    return (
        <header>
            <Title text="Material Multimedia Lenguaje 6° Grado"/>
            <nav>
                <ul className="nav-menu">
                    { unidades.map( (unidad, index) => {
                        return <li key={index} className="nav-li">{ unidad }</li>
                    }) }
                </ul>
            </nav>
        </header>
    )
}