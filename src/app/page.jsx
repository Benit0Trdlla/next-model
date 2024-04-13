import Image from 'next/image'
import Link from 'next/link';
import GoTopButton from './components/GoTopButton';
export default function Home() {
  return (
    <div>
      <header id="header">
        <nav className="navbar navbar-expand-md bg-white">
          <div className="container">
            <a href='./'>
              <Image src="/14.png" width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item">
                  <a href="#services" className="nav-link text-secondary"><small>Servicios</small></a>
                </li>
                <li className="nav-item">
                  <a href="#preguntas" className="nav-link text-secondary"><small>Preguntas Frecuentes</small></a>
                </li>
                <li className="nav-item">
                  <a href="#instrucciones" className="nav-link text-secondary"><small>Instrucciones</small></a>
                </li>
                <li className="nav-item">
                  <a href="#pwa" className="nav-link text-secondary"><small>Agreganos a tu dispositivo</small></a>
                </li>
                <li className="nav-item">
                  <Link href="./progress" className="btn btn-dark"><small>Iniciar</small></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="d-flex justify-content-center">
        <hr className="w-75 border-secondary m-0" />
      </div>

      <div className="container text-center mt-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 text-center px-4">
            <h6 className="fs-3 text-primary fw-bold mb-4"><strong>Proyecto Genius</strong></h6>
            <p className="fs-6"><small>
              En Caribe Enseña, nos hemos propuesto un objetivo claro: ofrecer un programa virtual de preparación para las
              pruebas Saber 11 del ICFES, diseñado específicamente para nuestros estudiantes . Nos enfocamos en proporcionar
              las herramientas necesarias para mejorar habilidades y conocimientos, aumentando así las posibilidades de éxito
              en estas evaluaciones cruciales para ingresar a la vida universitaria.
              <br />
              <br />
              Genius es nuestra solución innovadora: una plataforma de aprendizaje virtual que puedes descargar en tus
              dispositivos móviles, como celulares, computadoras o tabletas. Su accesibilidad offline te permite acceder
              al material educativo, guías de estudio, ejercicios y exámenes simulados, abarcando las áreas clave evaluadas
              en las pruebas Saber 11, sin necesidad de una conexión a internet constante.
            </small>
            </p>
          </div>
          <div className="col-md-5 row">
            <img className="img-fluid" src="/mainImage.png" width={50} height={60} alt='Imagen Principal' />
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <section id="services" className="py-5 mt-5" >
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4 mt-3">Servicios</h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <i className="fa-regular fa-heart fa-2x my-3"></i>
                  <h5 className="fw-bold">Love Design</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                    facilis nobis voluptatum sequi obcaecati aut minima.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <i className="fa-regular fa-eye fa-2x my-3"></i>
                  <h5 className="fw-bold">Clean UI</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                    facilis nobis voluptatum sequi obcaecati aut minima.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-mobile-screen fa-2x my-3"></i>
                  <h5 className="fw-bold">Responsive</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                    facilis nobis voluptatum sequi obcaecati aut minima.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <i className="fa-regular fa-object-group fa-2x my-3"></i>
                  <h5 className="fw-bold">Simple UX</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                    facilis nobis voluptatum sequi obcaecati aut minima.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PREGUNTAS FRECUENTES  */}
      <section id="preguntas" className="p-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <img src="/qanda.png" className="img-fluid" alt="Imagen Preguntas Frecuentes" />
            </div>
            <div className="col-md-7 col-lg-7">
              <h2 className="py-4 text-center">Preguntas <span className="text-danger">Frecuentes</span></h2>
              <div className="accordion accordion-flush" id="features">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      PreguntaNumeroUno
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam!
                      Provident sint nihil velit impedit modi autem eaque culpa facere omnis, odio quos minima architecto
                      officiis enim, ducimus perferendis blanditiis!</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      PreguntaNumeroDos
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam!
                      Provident sint nihil velit impedit modi autem eaque culpa facere omnis, odio quos minima architecto
                      officiis enim, ducimus perferendis blanditiis!</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      PreguntaNumeroTres
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam!
                      Provident sint nihil velit impedit modi autem eaque culpa facere omnis, odio quos minima architecto
                      officiis enim, ducimus perferendis blanditiis!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INSTRUCCIONES */}
      <section id="instrucciones" className="py-5 bg-white">
        <div className='container'>
          <h2 className="text-center fs-4 text-secondary-emphasis fw-bold mb-4">Conoce las Instrucciones de: </h2>
          <div className="row d-flex align-items-center justify-content-center py-3 mb-5">
            <div className="col-md-6 text-center mb-5">
              <h6 className="fs-4 text-primary fw-bold mb-4"><strong>Proyecto Genius</strong></h6>
              <p><small>
                El Examen de Estado de la Educación Media, conocido como Saber 11°, es una evaluación estandarizada que se aplica en Colombia para medir la calidad de la educación media. El examen está compuesto por cinco áreas: Lectura Crítica, Matemáticas, Sociales y Ciudadanas, Ciencias Naturales e Inglés1.
                <br />
                Desde el año 2021, el ICFES publica un nuevo reporte de resultados para el examen Saber 11, con el fin de ofrecer una interpretación más completa de los resultados. Este reporte incluye el puntaje global, los percentiles, guías de interpretación, y para cada área evaluada, el nivel de desempeño del estudiante junto con las habilidades y destrezas que representa2.
                <br />
                Para más detalles sobre orientarte en la prueba, saber los niveles de desempeño y cómo interpretar los resultados y utilizarlos, puedes consultar la guía proporcionada por el ICFES, <strong>descargala aquī.</strong>
              </small></p>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0">Ver documento en linea</li>
                <li className="list-group-item border-0">Enlace a descargar</li>
              </ol>
            </div>
            <div className="col-md-6 text-center">
              <h6 className="fs-4 text-primary fw-bold mb-4"><strong>Pruebas SABER 11</strong></h6>
              <p>
                <small>
                  El Examen de Estado de la Educación Media, conocido como Saber 11°, es una evaluación estandarizada que se aplica en Colombia para medir la calidad de la educación media. El examen está compuesto por cinco áreas: Lectura Crítica, Matemáticas, Sociales y Ciudadanas, Ciencias Naturales e Inglés1.
                  <br />
                  Desde el año 2021, el ICFES publica un nuevo reporte de resultados para el examen Saber 11, con el fin de ofrecer una interpretación más completa de los resultados. Este reporte incluye el puntaje global, los percentiles, guías de interpretación, y para cada área evaluada, el nivel de desempeño del estudiante junto con las habilidades y destrezas que representa2.
                  <br />
                  Para más detalles sobre orientarte en la prueba, saber los niveles de desempeño y cómo interpretar los resultados y utilizarlos, puedes consultar la guía proporcionada por el ICFES, <strong>descargala aquī.</strong>
                </small>
              </p>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0">Enlace a descargar</li>
                <li className="list-group-item border-0">Ver documento en linea</li>
              </ol>
              <div className="dropdown mt-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Descarga los documentos PDFs.
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/GuiadeOrientaciónSaber.pdf" download="GuiadeOrientaciónSaber.pdf">Descargar archivo</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://drive.google.com/file/d/1G2VqxDbKQXSmOOumr0c8RX_N94a6vdcT/view">Ver archivo en línea</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INSTRUCCIONES PWA  */}
      <section id="pwa" className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">Como agregar la aplicación a su dispositivo</h2>
            <hr className="w-24 mx-auto mb-4" />
          </div>
          <div className="row d-flex align-items-center justify-content-center py-3 mb-5">
            <div className="col-md-6 text-center mb-5">
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0">Abre Google Chrome.
                </li>
                <li className="list-group-item border-0">Introduce la dirección web de la página que quieres usar como PWA.</li>
                <li className="list-group-item border-0">Vete al botón menú de Google (el de los tres puntos)</li>
                <li className="list-group-item border-0">Selecciona la opción de Añadir a pantalla de inicio.</li>
                <li className="list-group-item border-0">Selecciona el nombre con el que quieres enviarla.</li>
              </ol>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="col-md-6">
                <img className="img-fluid" src="https://linube.com/blog/wp-content/uploads/pwa.png" alt='Imagen PWA' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
      <GoTopButton />

      <footer className="footer mt-auto">
        <section className="bg-light py-4 py-md-5 py-xl-8 border-top">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xl-between">
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <a>
                    <img src="/14.png" width={100} height={100} alt='Logo' />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Proyecto Genius</h4>
                  <address className="mb-4">Caribe Enseña</address>
                  <p className="mb-1">
                    <a className="link-secondary text-decoration-none" href="tel:+">(000) 123-4567</a>
                  </p>
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="mailto:">@caribeensena.org</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Materias</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Matematicas</a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Linguistica</a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Ciencias</a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Sociales</a>
                    </li>
                    <li className="mb-0">
                      <a href="#!" className="link-secondary text-decoration-none">Ingles</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-md-0">
              <div className="col-xs-12 col-md-7 order-1 order-md-0">
                <div className="copyright text-center text-md-start">
                  &copy; 2024. Todos los derechos reservados.
                </div>
              </div>
              <div className="col-xs-12 col-md-5 order-0 order-md-1">
                <ul className="nav justify-content-center justify-content-md-end">
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://caribeensena.org/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://www.linkedin.com/company/caribe-ense%C3%B1a/mycompany/verification/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://www.instagram.com/caribeensenaorg/?hl=es-la">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        className="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
