export default function Card(props) {
    return (
        <div className={`card ${props.className || ''}`} style={props.style}>
            {props.children}
        </div>
        )
}
