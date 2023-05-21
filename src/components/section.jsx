import { Card } from "./card";
import { Title } from "./title";
import "./section.css";

export function Section({ games, text }) {
    return (
        <section className="section-container">
            <div className="title-container">
                <Title text={text} />
            </div>
            <div className="cards-container">
                {games.map((game, index) => {
                    return <Card key={index} content={game} />
                })}
            </div>
        </section>
    );
}