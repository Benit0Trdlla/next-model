'use client'
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function Buttons({totalPreguntas}) {
    const [count, setCount] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    // console.log('total preguntas:', totalPreguntas);
    const handleNextClick = () => {
        if (count === totalPreguntas - 1) return 
        setCount(count => count + 1);
    }

    const handlePrevClick = () => {
        if (count === 0) return
        setCount(count  => count - 1);
    }

    useEffect(() => {
        params.set('index', count)
        replace(`${pathname}?${params.toString()}`)
    }, [count, pathname, replace]);

    return (
        <> 
            <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
            <button type="button" className="btn btn-primary" onClick={handleNextClick} >Siguiente</button>
        </>

    )
}
