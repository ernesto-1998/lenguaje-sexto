import { Card } from "../components/card";
import { Title } from "../components/title";
import { games1 } from "../utils/games";
import "./home.css";

export function Home() {

    return (
        <section className="body-container">
            <div className="title-container">
                <Title text="Juegos"/>
            </div>
            <div className="cards-container">
                { games1.map((game, index) => {
                    return <Card key={index} content={game} />
                }) }
            </div>
        </section>
    );
}