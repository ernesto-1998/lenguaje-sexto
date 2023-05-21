import { Section } from "../components/section"
import { games1 } from "../utils/games";
import "./home.css";

export function Home() {

    return (
        <div className="body-container">
            <Section games={ games1 } text="Juegos"/>
            <Section games={ games1 } text="Vídeos"/>
            <Section games={ games1 } text="Otros"/>
        </div>
    );
}