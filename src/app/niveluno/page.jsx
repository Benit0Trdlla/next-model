import { fetchPreguntas } from "../../app/Administrador/page";
// import { Buttons } from "../../app/components/Buttons";
import { OpcionsAndAlerts } from "../../app/components/Opcions";
import Cronometro from '../../app/components/Cronometro';
import Link from "next/link";

export default async function NivelUnoPage({ searchParams }) {
    const preguntas = await fetchPreguntas();

    const stateTimer = searchParams?.state;
    const numIndex = searchParams?.index;
    const totalPreguntas = preguntas.length;
    const pregunta = preguntas[numIndex || 0]; // Obtener solo una pregunta

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
                                    <Link href="./" className="btn btn-dark">Volver</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-center">
                    <hr className="w-75 border-secondary m-0" />
                </div>
            </header>
            <div>
                <Cronometro stateTimer={stateTimer}/>
            </div>
            <div id="inicio">
                <div className="container mb-5">
                    <div className="row d-flex align-items-center justify-content-center py-1">
                        <div className="col-md-6 mt-3">
                            <h6 className="text-center">{pregunta.Enunciado}</h6>
                            {/* <p className="text-danger">IMPORTANTE LA FORMA DE ESCRIBIR LAS OPCIONES Y LA RESPUESTA CORRECTA DEBEN SER LA MISMA. </p> */}
                            <OpcionsAndAlerts totalPreguntas={totalPreguntas} justifyContent={pregunta.Explicación} numIndex={numIndex} correctAnswer={pregunta.Respuestas} opciones={[
                                { label: "A. " + pregunta.A, value: pregunta.A },
                                { label: "B. " + pregunta.B, value: pregunta.B },
                                { label: "C. " + pregunta.C, value: pregunta.C },
                                { label: "D. " + pregunta.D, value: pregunta.D }
                            ]} />
                            {/* <p>Respuesta Correcta: {pregunta.Respuestas}</p> */}
                            {/* <p>{pregunta.Explicación}</p> */}
                            {/* <div className="d-flex justify-content-center">
                                <Buttons totalPreguntas={totalPreguntas} />
                            </div> */}
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