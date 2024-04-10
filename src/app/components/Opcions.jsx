'use client'
import { useState, useEffect } from 'react';
import Cronometro from '../../app/components/Cronometro';

export function OpcionsAndAlerts({ opciones, correctAnswer, numIndex, justifyContent }) {

    const [alert, setAlert] = useState(false)
    const [alert2, setAlert2] = useState(false)

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === correctAnswer) {
            setAlert(true)
            setAlert2(false)
        } else {
            setAlert2(true)
            setAlert(false)
        }
    };

    useEffect(() => {
        setAlert(false)
        setAlert2(false)
    }, [numIndex]);


    return (
        <>
            <Cronometro/>
            <div className='mb-4 ms-4'>
                {opciones.map((opcion) => (
                    <div className="form-check" key={opcion.value}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value={opcion.value} onChange={handleOptionChange} />
                        <label className="form-check-label">
                            {opcion.value}
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
        </>
    )
}