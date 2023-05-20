import "./title.css"

export function Title({ text }) {
    return (
        <div className="title-content">
            <h1>{ text }</h1>
        </div>
    );
}