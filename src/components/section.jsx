import { Card } from "./card";
import { Title } from "./title";
import "./section.css";

export function Section({ content, text }) {
    return (
        <section className="section-container">
            <div className="title-container">
                <Title text={text} />
            </div>
            <div className="cards-container">
                {content.map((cont, index) => {
                    return <Card key={index} content={cont} />
                })}
            </div>
        </section>
    );
}