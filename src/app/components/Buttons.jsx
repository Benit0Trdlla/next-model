'use client'
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function Buttons() {
    const [count, setCount] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleNextClick = () => {
        setCount(count + 1);
        params.set('index', count)
        replace(`${pathname}?${params.toString()}`)
    }

    const handlePrevClick = () => {
        setCount(count - 1);
        params.set('index', count)
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <> 
            <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
            <button type="button" className="btn btn-primary" onClick={handleNextClick}>Siguiente</button>
        </>

    )
}

// export function PrevButton() {
//     const [count, setCount] = useState(0);

//     const searchParams = useSearchParams();
//     const pathname = usePathname();
//     const { replace } = useRouter();

//     const params = new URLSearchParams(searchParams);

//     const handlePrevClick = () => {
//         if (count === 0) {
//             params.delete('index')
//             console.log('delete')
//         } else {
//             setCount(count - 1);
//             params.set('index', count)
//             replace(`${pathname}?${params.toString()}`)
//         }
//     }
//     return (
//         <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
//     )
// }