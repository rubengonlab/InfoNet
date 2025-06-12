import './Header.css'


function Header({setOpenedId}) {
    const handleClick = (id) => {
        setOpenedId(id);
        // Scroll hacia la sección
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="header">
            <h1 className="title">Modelo OSI</h1>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><button onClick={() => handleClick("que-es")}>¿Qué es?</button></li>
                    <li><button onClick={() => handleClick("capa-aplicacion")}>Aplicación</button></li>
                    <li><button onClick={() => handleClick("capa-presentacion")}>Presentación</button></li>
                    <li><button onClick={() => handleClick("capa-sesion")}>Sesión</button></li>
                    <li><button onClick={() => handleClick("capa-transporte")}>Transporte</button></li>
                    <li><button onClick={() => handleClick("capa-red")}>Red</button></li>
                    <li><button onClick={() => handleClick("capa-enlace")}>Enlace</button></li>
                    <li><button onClick={() => handleClick("capa-fisica")}>Física</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header