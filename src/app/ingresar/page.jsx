import Image from 'next/image'
import Header from "@/app/components/Header";

export default function IngresarPage() {
    return (
        <>
            <Header MyImage={"/ImgLogoNav.png"} href={"./"}/>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
            <section className='gradient-custom'>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-5">
                            <Image src="/ImgLogin.png" width={800} height={800} className="img-fluid d-none d-md-block" alt="Imagen Login" style={{ width: "auto" }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-7">
                            <div className="row gy-5 justify-content-center">
                                <div className="col-12">
                                    <h2 className="display-5 fw-bold text-center">Iniciar sesión</h2>
                                    <p className="text-center m-0">¿No tienes una cuenta? <a href="#!">Registrarse</a></p>
                                </div>
                                <div className="col-12 col-lg-7">
                                    <form action="#!">
                                        <div className="row gy-3">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" id="email" placeholder="name@example.com" />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" id="password" placeholder="Ingrese su contraseña" />
                                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row justify-content-between">
                                                    <div className="col-6">
                                                        <div className="text-start">
                                                            <a href="#!" className="link-secondary text-decoration-none">Olvidé mi contraseña</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <a href="/progress">
                                                        <button className="btn btn-lg btn-dark rounded-2 fs-6" type="button">Ingresar</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}