'use client'
import { useState, useEffect } from 'react';

export default function Cronometro() {
    // console.log("que pasa aca", mood)
    const [segundos, setSegundos] = useState(0);
    const [corriendo, setCorriendo] = useState(true);

    useEffect(() => {
        let interval;
        if (corriendo) {
            interval = setInterval(() => {
                setSegundos(segundos => segundos + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [corriendo]);

    const minutos = Math.floor(segundos / 60);
    const segundosMostrados = segundos % 60;

    // const detenerCronometro = () => {
    //     setCorriendo(false);
    // }

    return (
        <div>
            <p className='text-center'>Tiempo: {minutos} minutos {segundosMostrados} segundos</p>
            {/* <div className='d-flex justify-content-center'>
                <button className='btn btn-secondary bg-transparent text-black' onClick={detenerCronometro}>Detener Cronómetro</button>
            </div> */}
        </div>
    );
}