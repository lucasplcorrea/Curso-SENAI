export default function Card({titulo, subtitulo = "Certamente não é o sei la"}) {

    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
        </div>
    )
}