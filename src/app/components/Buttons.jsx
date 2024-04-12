'use client'
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function Buttons({ totalPreguntas, ask }) {
    const [count, setCount] = useState(0);
    const [stateTimer, setStateTimer] = useState(true);
    const [textButton, setTextButton] = useState('Siguiente');

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleNextClick = () => {
        if (count === totalPreguntas - 1) {
            setStateTimer(false)
            return
        }
        setCount(count => count + 1);
    }

    const handlePrevClick = () => {
        if (count === 0) return
        setCount(count => count - 1);
    }

    useEffect(() => {
        params.set('index', count)
        replace(`${pathname}?${params.toString()}`)
    }, [count, pathname, replace]);

    useEffect(() => {
        params.set('state', stateTimer)
        replace(`${pathname}?${params.toString()}`)
    }, [stateTimer, pathname, replace])

    return (
        <>
            <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
            { ask ? <button type="button" className="btn btn-primary" onClick={handleNextClick} >{textButton}</button> : <button type="button" className="btn btn-primary" disabled>{textButton}</button> }
        </>
    )
}
