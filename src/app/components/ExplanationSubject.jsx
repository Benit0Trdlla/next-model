import Link from "next/link";
export function RowList({ children, title }) {
    return (
        <div id="inicio" className="container py-3">
            <h1 className="font-weight-bold text-center mt-3">{title}</h1>
            {children}
        </div>
    );
}

export function Row({ children, subTitle, subTitleTwo, href }) {
    return (
        <>
            <div className="row mt-5 py-2">
                <div className="col-md-6 text-center">
                    <h4>{subTitle}</h4>
                    {children[0]}
                </div>
                <div className="col-md-6 text-center">
                    <h4>{subTitleTwo}</h4>
                    {children[1]}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link href={href}>
                    <button className="btn btn-secondary btn-block mt-3">INICIAR</button>
                </Link>
            </div>
        </>
    );
}