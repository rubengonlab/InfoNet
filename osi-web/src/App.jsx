import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import {useState} from "react";

function App() {
    const [openSignal, setOpenSignal] = useState({});

    const handleOpen = (id) => {
        setOpenSignal({ id, timestamp: Date.now() });
    };

    return (
        <>
            <Header setOpenedId={handleOpen} />
            <main>
                <Section id="que-es" title="Qué es el Modelo OSI" openSignal={openSignal}>
                    <p>
                        El Modelo OSI, también conocido como <b>Modelo de interconexión de sistemas abiertos</b>,
                        fue desarrollado por la Organización Internacional de Normalización (ISO) durante la década de
                        1980.
                    </p>
                    <p>
                        Se trata de un marco de referencia que organiza y estandariza las funciones de comunicación en
                        redes de computadoras.
                        Permite que distintos dispositivos puedan comunicarse entre sí de manera eficiente y sin
                        problemas,
                        independientemente de su fabricante o tecnología subyacente.
                    </p>
                    <p>
                        Está compuesto por <b>siete capas</b>, cada una de las cuales se encarga de una función
                        específica en el proceso de comunicación de datos.
                    </p>
                    <img src="/OSI.png" alt="Estructura en capas del modelo OSI" className="imagen-centrada"/>

                    <article>
                        <p>Para comenzar a entender como funciona una red debemos comprender una serie de conceptos:</p>
                        <p><b>Protocolo:</b> Conjunto de reglas y estándares que definen cómo se realiza la transmisión, recepción y manejo de datos
                            entre dispositivos en una red. Los protocolos gestionan aspectos como el formato de los mensajes, la sincronización, el control de errores y la corrección.</p>
                        <p><b>Arquitectura:</b> Conjunto de protocolos y capas que permiten la comunicación entre
                            ordenadores.</p>
                        <p><b>Tipos de redes (según su extensión):</b> <ul>
                            <li><b>LAN (Local Area Network):</b> Red de área local, que conecta dispositivos dentro de un espacio físico reducido como una oficina o un edificio. Su alcance varía típicamente entre unos pocos metros hasta varios kilómetros.</li>
                            <li><b>MAN (Metropolitan Area Network):</b> Red de área metropolitana, que abarca una ciudad o área metropolitana, interconectando múltiples LANs a distancias mayores que las de una LAN, usualmente hasta decenas de kilómetros.</li>
                            <li><b>WAN (Wide Area Network):</b> Red de área amplia que conecta múltiples redes geográficamente dispersas, como diferentes ciudades o países. Utiliza tecnologías de transmisión especializadas para cubrir grandes distancias, superando los límites de las LAN y MAN.</li>
                        </ul></p>
                        <p><b>Switch (conmutador):</b> Dispositivo de red que recibe, procesa y reenvía tramas de datos dentro de una LAN. Generalmente operan en la capa de enlace de datos, capa 2 (**aunque también existen switches que operan en capa de red), utilizando direcciones MAC para dirigir el tráfico.</p>
                        <p><b>Router:</b> Dispositivo que interconecta dos o mas redes para formar una interred o
                            internet (varias LAN juntas). Opera principalmente en la capa de red, usando direcciones IP (IPv4 e IPv6).</p>
                    </article>
                    <img src="/router-switch.png" alt="Dos LANs conectadas con un router" className="imagen-centrada"/>

                </Section>

                <Section id="capa-aplicacion" title="Capa de Aplicación" openSignal={openSignal}>

                </Section>
            </main>
            <Footer />
        </>
    )
}

export default App
