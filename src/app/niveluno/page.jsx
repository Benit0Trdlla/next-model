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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="./" className="btn btn-dark">Volver</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="d-flex justify-content-center">
                    <hr className="w-75 border-secondary m-0" />
                </div>
            </header>
            <div>
                <Cronometro stateTimer={stateTimer} />
            </div>
            <div id="inicio">
                <div className="container mb-5">
                    <div className="row d-flex align-items-center justify-content-center py-1">
                        <div className="col-md-6 mt-3 mb-5">
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

            {/* BOTONES DE NIVELES (HACERLO COMO COMPONENTE)  */}
            <div className="d-flex justify-content-around align-items-center mt-5 mb-3 me-2 ms-2">
                <Link href="./progress" className="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                    </svg>
                </Link>
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton1" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                            </svg>
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton2" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg></button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton3" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg></button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton4" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg></button>
                    </div>
                </div>
                <button href="./" className="btn btn-primary" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
        </>
    )
}