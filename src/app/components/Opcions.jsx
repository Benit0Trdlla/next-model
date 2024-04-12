'use client'
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Buttons } from "../../app/components/Buttons";

export function OpcionsAndAlerts({ opciones, correctAnswer, numIndex, justifyContent, totalPreguntas}) {
    const [alert, setAlert] = useState(false)
    const [alert2, setAlert2] = useState(false)
    const [ask, setAsk] = useState(false)
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        // agregar a la URL si respondio o no (porejemplo asked=false cuando no respondio y asked=true cuando respondio) y
        //  en el componente de los botones leer la URL y habilitar el boton de siguiente pregunta.
        if (selectedValue === correctAnswer) {
            setAlert(true)
            setAlert2(false)
            setAsk(true)
        } else {
            setAlert2(true)
            setAlert(false)
            setAsk(true)
        }
    };

    useEffect(() => {
        params.set('a', ask)
        replace(`${pathname}?${params.toString()}`)
    }, [ask, pathname, replace]);

    useEffect(() => {
        setAlert(false)
        setAlert2(false)
        setAsk(false)
    }, [numIndex]);

    return (
        <>
            <div className='mb-4 ms-4'>
            {opciones.map((opcion) => (
                <div className="form-check" key={opcion.value}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value={opcion.value} onChange={handleOptionChange} />
                    <label className="form-check-label">
                        {opcion.label}
                    </label>
                </div>
            ))}
            </div>
            {alert ? <div className="alert alert-success" role="alert">
                Respuesta Correcta
            </div> : null}
            {alert2 ? (<div className="alert alert-danger" role="alert">
                La respuesta correcta: {correctAnswer} <a className="" data-bs-toggle="modal" data-bs-target="#Modaljustificacion"><strong>Conocé la justificación. Haz Click aquí.</strong></a>
                {/* MODAL */}
                <div className="modal fade" id="Modaljustificacion" aria-labelledby="ModalJustify" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body text-black">
                                {justifyContent}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Ok! Gracias.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
            <div className="d-flex justify-content-center">
                <Buttons totalPreguntas={totalPreguntas}  ask={ask}/>
            </div>
        </>
    )
}