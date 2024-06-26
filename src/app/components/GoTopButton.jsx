'use client'
export default function GoTopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='d-flex justify-content-end me-4 py-4'>
            <button className='btn btn-warning z-10' onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                </svg>
            </button>
        </div>
    )
}