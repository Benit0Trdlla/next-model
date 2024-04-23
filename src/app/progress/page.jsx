import Image from 'next/image';
import Link from 'next/link';
export default function ProgressPage() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <a href='./'>
                            <Image src="/14.png" width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" />
                        </a>
                        <ul className="navbar-nav ms-auto gap-3">
                            <li className="nav-item">
                                <Link href="./" className="btn btn-primary"><small>Volver</small></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
            <div id="inicio" className="container">
                <h1 className="display-5 font-weight-bold py-4 text-secondary">Empieza la prueba!</h1>
                <div className="card-group gap-2 py-3">
                    <div className="card rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center">Matemáticas</h5>
                        </div>
                        <Image src="/ImgMatemática.png" width={300} height={350} className="card-img-top" alt="Imagen Matemáticas" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./niveluno" className="btn bg-transparent border-0">
                                <Image src="/unlocked.webp" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center ">Lectura Critica</h5>
                        </div>
                        <Image src="/ImgLengua.png" width={300} height={350} className="card-img-top" alt="Imagen Lectura Critica" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sociales y ciudadanas</h5>
                        </div>
                        <Image width={300} height={350} src="/ImgSociales.png" className="card-img-top" alt="Sociales y ciudadanas" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center">Ciencias naturales</h5>
                        </div>
                        <Image width={300} height={350} src="/ImgCncNa.png" className="card-img-top" alt="Ciencias naturales" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center">Inglés</h5>
                        </div>
                        <Image width={300} height={350} src="/ImgIngles.png" className="card-img-top" alt="Imagen Inglés" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Matemáticas" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 px-2 fst-italic text-secondary">
                <p className="fs-3 text-center">
                    Estas son las áreas que vas a explorar, subdivididas por 4 niveles.
                    <br />
                    ¡El aprendizaje con diversión va empezar!
                </p>
            </div>
        </>
    )
}