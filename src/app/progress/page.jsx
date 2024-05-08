import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header";

export default function ProgressPage() {
    return (
        <>
            <Header MyImage={"/ImgLogoNav.png"} href={"/ingresar"}/>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
            <div id="inicio" className="container">
                <h1 className="display-5 font-weight-bold py-4 text-black"><strong>Empieza la prueba!</strong></h1>
                <div className="card-group gap-2 py-3">
                    <div className="card rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center text-black">Razonamiento lógico</h5>
                        </div>
                        <a href="./razonamientologico">
                            <Image src="/ImgMatemática.png" width={400} height={400} className="card-img-top w-100 h-100" alt="Imagen Matemáticas" />
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./razonamientologico/niveluno" className="btn bg-transparent border-0">
                                <Image src="/unlocked.webp" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                            </Link>
                            <Link href="./razonamientologico/niveldos" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center text-black">Lectura Critica</h5>
                        </div>
                        <a href="/lecturacritica">
                            <Image src="/ImgLengua.png" width={400} height={400} className='card-img-top w-100 h-100' alt="Imagen Lectura Critica" />
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./lecturacritica/niveluno" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center text-black">Sociales y ciudadanas</h5>
                        </div>
                        <a href="/">
                            <Image width={400} height={400} src="/ImgSociales.png" className='card-img-top w-100 h-100' alt="Sociales y ciudadanas" />
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center text-black">Ciencias naturales</h5>
                        </div>
                        <Image width={400} height={400} src="/ImgNaturales.png" className='card-img-top w-100 h-100' alt="Ciencias naturales" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border-start rounded border-dark border-2">
                        <div className="card-body">
                            <h5 className="card-title text-center text-black">Inglés</h5>
                        </div>
                        <Image width={400} height={400} src="/ImgIngles.png" className='card-img-top w-100 h-100' alt="Imagen Inglés" />
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                            </Link>
                            <Link href="./progress" className="btn  bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                            </Link>
                            <Link href="./progress" className="btn bg-transparent border-0">
                                <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 px-2 text-black">
                <p className="fs-3 text-center">
                    <strong>
                    Estas son las áreas que vas a explorar, subdivididas por 4 niveles.
                    <br />
                    ¡El aprendizaje con diversión va empezar!
                    </strong>
                </p>
            </div>
        </>
    )
}