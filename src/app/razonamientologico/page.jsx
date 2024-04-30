import Header from "../components/Header"
import { RowList, Row } from '../components/ExplanationSubject';

export default function MathExplanationPage() {
    return (
        <>
            <Header MyImage="/ImgLogoNav.png" href={"/progress"} />
            <RowList title="Razonamiento Logico">
                <Row subTitle="Contenido a evaluar" subTitleTwo="Sistema de Evaluacion" href={"/razonamientologico/niveluno"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident impedit, ab deleniti ullam porro corrupti quasi fugit dolorem, sunt aliquid, molestias minus earum vitae ad quod velit suscipit accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque et odit? Voluptatem soluta laudantium distinctio veritatis, itaque nam quod deserunt eveniet accusantium doloremque autem natus alias iusto reprehenderit perferendis!</p>
                    <p>Contenido 2.2</p>
                </Row>
            </RowList>
        </>
    )
}