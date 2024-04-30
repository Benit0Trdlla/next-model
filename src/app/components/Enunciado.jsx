export default function Enunciado({ Enunciado }) {
    const isImageUrl = (Enunciado) => {
        return /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i.test(Enunciado);
    };
    return (
        <>
            <h6 className="text-center">
                {isImageUrl(Enunciado) ? (
                    <img src={Enunciado} alt="Enunciado" />
                ) : (
                    <p>{Enunciado}</p>
                )}
            </h6>
        </>
    )

}