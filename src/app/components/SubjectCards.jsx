import Image from 'next/image';
import Link from 'next/link';
export default function SubjectCards({ SubjectInfo }) {
    return (
        <div className="card-group gap-2 py-3">
            {SubjectInfo.map((subject, index) => (
                <div className="card border-start rounded border-dark border-2" key={subject.id}>
                    <div className='card-body'>
                        <h5 className="card-title text-center text-black">{subject.tittle}</h5>
                    </div>
                    <a href={subject.href}>
                        <Image src={subject.image} width={400} height={400} className="card-img-top w-100 h-100" alt="Imagen Matemáticas" priority/>
                    </a>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link href={`${subject.href}/niveluno`} className="btn bg-transparent border-0">
                            <Image src="/unlocked.webp" width={25} height={25} className="card-img-top" alt="Imagen Nivel 1" />
                        </Link>
                        <Link href={`${subject.href}/niveldos`} className="btn  bg-transparent border-0">
                            <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 2" />
                        </Link>
                        <Link href={`${subject.href}/niveltres`} className="btn bg-transparent border-0">
                            <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 3" />
                        </Link>
                        <Link href={`${subject.href}/nivelcuatro`} className="btn bg-transparent border-0">
                            <Image src="/locked.png" width={25} height={25} className="card-img-top" alt="Imagen Nivel 4" />
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
    )
}