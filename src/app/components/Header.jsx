import Link from 'next/link'
import Image from 'next/image'
export default function Header({ titleSubject, MyImage, href }) {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-md bg-white">
                <div className="container">
                    {titleSubject && !MyImage && (
                        <a className="navbar-brand fs-2 text-black">{titleSubject}</a>
                    )}
                    {MyImage && !titleSubject && (
                        <Image src={MyImage} width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                    )}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href={href} className="btn btn-dark">Volver</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </header>
    )
}