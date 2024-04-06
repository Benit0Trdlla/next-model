import { parse } from 'papaparse';

const fetchPreguntas = async () => {
    const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSuLH4t-YFmRI5phxbxvBEo9uRQaRP-P70Kpoa3PT7ZwRPWmiJdEwduLz5bKkSBWxGQV2ynDHHWIpYJ/pub?output=csv", { next: { revalidate: 30 } });
    const csvData = await response.text();
    const jsonData = parse(csvData, { header: true });
    return jsonData.data;
}
export default async function AdminPage() {
    const products = await fetchPreguntas();

    return (
        <>
            <h4 className='me-2 ms-2'>Fetching de preguntas</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Enunciado</th>
                        <th scope="col">A</th>
                        <th scope="col">B</th>
                        <th scope="col">C</th>
                        <th scope="col">D</th>
                        <th scope="col">Respuestas</th>
                        <th scope="col">Explicacion</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.Pregunta}>
                            <td>{product.Pregunta}</td>
                            <td>{product.Enunciado}</td>
                            <td>{product.A}</td>
                            <td>{product.B}</td>
                            <td>{product.C}</td>
                            <td>{product.D}</td>
                            <td>{product.Respuestas}</td>
                            <td>{product.Explicación}</td>
                            <td><img src={product.Imagen} alt="Logo Caribe Enseña" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
