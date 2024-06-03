// import Image from "next/image";
export const metadata = {
    title: "Offline page",
};
export default function Offline() {
    return (
        <>
            {/* <h1>Offline</h1>
            <button type="button" className="btn btn-danger">ANDA EL BOOTSTRAP!!</button>
            <button type="button" className="btn btn-primary">4KT!</button>
            <Image src="/0-circle.svg" alt="icono offline 0-circle" width={500} height={500} /> */}
            <div className="d-flex justify-content-center align-items-center">
                <img src="/icons/wifi-off.svg" alt="icono offline wifi-off" className="img-fluid" style={{ maxWidth: '450px', height: '150px' }} />
            </div>
            <h1 className="text-center">You are offline</h1>
            <br />
            <h3 className="text-center">Go online to access content</h3>
            <br />
            <p className="text-warning text-center">Retrying...</p>
            {/* <button className="btn btn-primary"><a href="/">Volver al home</a></button> */}
        </>
    );
}