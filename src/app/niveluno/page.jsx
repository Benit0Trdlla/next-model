import { fetchPreguntas } from "../../app/Administrador/page";
import { Buttons} from "../../app/components/Buttons";

export default async function NivelUnoPage({searchParams}) {
    const preguntas = await fetchPreguntas();
    const pregunta = preguntas[searchParams?.index || 0]; // Obtener solo la primera pregunta

    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <a className="navbar-brand fs-2 text-black">Matematica</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="btn btn-dark">Volver</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-center">
                    <hr className="w-75 border-secondary m-0" />
                </div>
            </header>

            <div id="inicio">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center py-1">
                        <div className="col-md-6">
                            <h6>{pregunta.Enunciado}</h6>
                            <p>A:{pregunta.A}</p>
                            <p>B:{pregunta.B}</p>
                            <p>C:{pregunta.C}</p>
                            <p>D:{pregunta.D}</p>
                            {/* <p>Respuesta Correcta: {pregunta.Respuestas}</p> */}
                            {/* <p>{pregunta.Explicación}</p> */}
                            <div className="d-flex justify-content-center">
                                <Buttons />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <h1 className="text-center fw-bold fs-1">Álgebra</h1>
                            <p className="me-2 mt-3 text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
                                sunt, ad
                                voluptatem iure
                                consequuntur provident? Sequi in, eveniet mollitia, fugiat ratione delectus facilis officia aperiam
                                odit
                                expedita explicabo laudantium neque?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                                repudiandae nisi commodi laboriosam architecto in nemo odit! Accusamus modi id, ipsam qui non optio
                                aliquid
                                vero, possimus quo nihil aut!</p>
                            <h4>Ejemplos de problemas de álgebra</h4>
                            <div className="mt-3">
                                <h6><strong>1. Resolución de ecuaciones :</strong><small className="text-body-secondary"> Resolver la
                                    ecuación</small>
                                </h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto nulla nisi perspiciatis
                                    a atque
                                    laboriosam repellat, maiores sint ipsam quasi quidem laudantium totam et sunt at voluptatibus
                                    vel
                                    labore.</p>
                                <h6><strong>2. Factorización :</strong><small className="text-body-secondary"> Es el proceso de
                                    descomponer una
                                    expresión algebraica en un producto de factores. Por ejemplo, la expresión x^2-9</small>
                                </h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, natus, voluptate minima
                                    explicabo,
                                    repellat consequatur voluptas ipsum alias ad debitis totam magni ex quos. Dolore totam fugit
                                    doloribus
                                    sequi error!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}