import Header from "../components/Header"
import { RowList, Row } from '../components/ExplanationSubject';

export default function LecturaCriticaPage() {
    return (
        <>
            <Header MyImage="/ImgLogoNav.png" href={"/progress"} />
            <RowList title="Lectura Critica">
                <Row subTitle="Contenido a evaluar" subTitleTwo="Sistema de Evaluacion" href={"/lecturacritica/niveluno"}>
                    <div>
                        El área de lectura crítica se evalúa dentro del módulo de Lenguaje, específicamente en la subprueba de Lectura Crítica. Esta sección mide competencias relacionadas con la habilidad para leer de manera crítica, comprender estructuras formales de textos y analizar información implícita y explícita. La prueba busca evaluar no solo la comprensión literal, sino también la capacidad de análisis, interpretación y evaluación de la información presentada en una variedad de formatos. Es fundamental para el desarrollo de habilidades críticas en la lectura y la interpretación de textos en contextos académicos y cotidianos.
                        Los niveles de desempeño en esta prueba no están explícitamente etiquetados en las preguntas, pero se pueden inferir a partir de los criterios de evaluación. A continuación, se describen los niveles de desempeño:
                        <br />
                        <ol>
                            <li><strong>Nivel 1:</strong> En este nivel, el evaluado identifica elementos literales en textos continuos y discontinuos sin establecer relaciones de significado. Reconoce información explícita y la relaciona con el contexto. Además, puede identificar la estructura de textos y fenómenos semánticos básicos como sinónimos y antónimos.</li>
                            <li><strong>Nivel 2:</strong> Además de lo descrito en el nivel 1, el evaluado interpreta información de textos al inferir contenidos implícitos y reconocer estructuras, estrategias discursivas y juicios valorativos. Relaciona marcadores textuales y analiza y sintetiza la información contenida en un texto.</li>
                            <li><strong>Nivel 3:</strong> Además de lo descrito en los niveles 1 y 2, el evaluado comprende la estructura formal de un texto y la función de sus partes. Entiende el significado de expresiones relacionales en un texto, como conectores y marcadores.</li>
                            <li><strong>Nivel 4:</strong> En este nivel, además de lo descrito en los niveles anteriores, el evaluado reflexiona a partir de un texto sobre la visión de mundo del autor, considerando costumbres, creencias, juicios, carácter ideológico-político y posturas éticas. También valora y contrasta elementos paratextuales presentes en el texto.</li>
                        </ol>
                        Estos niveles representan un continuum de habilidades, desde el reconocimiento básico hasta la capacidad de análisis crítico y evaluación profunda. La lectura crítica es esencial para el desarrollo de ciudadanos informados y capaces de comprender y cuestionar la información que encuentran en su entorno.
                    </div>
                    <div>
                        El sistema de evaluación de la prueba de lectura crítica en las pruebas Saber 11 se enfoca en evaluar la competencia lectora de los estudiantes a través de preguntas de selección múltiple con única respuesta. La prueba evalúa tres competencias principales:
                        <br />
                        <br />
                        <ol>
                            <li><strong>Identificar y comprender el significado de las partes que conforman un texto, como frases, palabras y expresiones.</strong></li>
                            <li><strong>Comprender cómo se enlazan las partes de un texto para darle un sentido global.</strong></li>
                            <li><strong>Analizar y evaluar el contenido del texto, así como la intención y el contexto en el que se produce.</strong></li>
                        </ol>
                        La prueba consta de 41 preguntas y utiliza dos tipos de textos para evaluar estas competencias. Además, el diseño de la prueba propone una serie de pasos que permiten desagregar y generar un puente entre lo que se quiere evaluar (las competencias) y las tareas que debería desarrollar un estudiante para dar cuenta de ello.
                    </div>
                </Row>
            </RowList>
        </>
    )
}