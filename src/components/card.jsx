import "./card.css"

export function Card({ content }) {
    return (
        <a href={content.link} target="_blank" rel="noreferrer">
            <div className="card">
                <img src={content.img} alt="" />
                <div className="card-body">
                    <span className="card-text"> {content.title} </span>
                </div>
            </div>
        </a>
    );
}