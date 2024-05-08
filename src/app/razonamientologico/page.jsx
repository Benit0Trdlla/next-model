import Header from "../components/Header"
import { RowList, Row } from '../components/ExplanationSubject';

export default function MathExplanationPage() {
    return (
        <>
            <Header MyImage="/ImgLogoNav.png" href={"/progress"} />
            <RowList title="Razonamiento Logico">
                <Row subTitle="Contenido a evaluar" subTitleTwo="Sistema de Evaluacion" href={"/razonamientologico/niveluno"}>
                    <div>
                        El área de razonamiento lógico se evalúa como parte del módulo de Matemáticas, específicamente en la subprueba de Razonamiento Cuantitativo. Esta sección evalúa habilidades fundamentales como la capacidad de argumentación, la destreza para plantear y resolver problemas, y la comprensión de estructuras lógicas y matemáticas. Los niveles de desempeño abarcan desde el reconocimiento de procedimientos y conceptos básicos hasta la aplicación de conocimientos en contextos complejos y la resolución de problemas que demandan un alto nivel de abstracción y razonamiento. Aunque la prueba no asigna explícitamente un nivel a cada pregunta, se presentan aleatoriamente cuestiones que cubren los siguientes niveles de desempeño:
                        <br />
                        - Nivel 1: Reconocimiento de procedimientos y conceptos básicos.
                        <br />
                        - Nivel 2: Aplicación de conocimientos en contextos simples.
                        <br />
                        - Nivel 3: Resolución de problemas en contextos de mediana complejidad.
                        <br />
                        - Nivel 4: Aplicación de conocimientos en contextos complejos y resolución de problemas que requieren un alto nivel de abstracción y razonamiento.
                    </div>
                    <div>
                        El sistema de evaluación de la prueba de razonamiento lógico en las pruebas Saber 11, con más de 50 preguntas se centra en evaluar la capacidad de los estudiantes para aplicar principios lógicos y matemáticos en la resolución de problemas. La prueba de razonamiento cuantitativo, que forma parte del módulo de Matemáticas, incluye preguntas diseñadas para medir competencias como:
                        <br />
                        <br />
                        <ol>
                            <li><strong>Comprensión de conceptos</strong>: Entender y aplicar conceptos matemáticos y lógicos básicos.</li>
                            <li><strong>Análisis de información</strong>: Interpretar y analizar datos presentados en diversas formas.</li>
                            <li><strong>Razonamiento deductivo e inductivo</strong>: Inferir hechos y deducir conclusiones a partir de la información dada.</li>
                            <li><strong>Resolución de problemas</strong>: Aplicar el razonamiento lógico para resolver problemas matemáticos y situacionales.</li>
                        </ol>
                        La prueba consta de preguntas de selección múltiple con única respuesta y está diseñada para evaluar diferentes niveles de complejidad, desde lo más básico hasta lo más avanzado. Además, se utilizan contextos variados para asegurar que las preguntas sean representativas de situaciones reales y relevantes para los estudiantes.
                    </div>
                </Row>
            </RowList>
        </>
    )
}