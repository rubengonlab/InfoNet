function Footer() {
    return (
        <footer style={{
            backgroundColor: '#003366',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            marginTop: '4rem'
        }}>
            <p>© {new Date().getFullYear()} NetEduca. Todos los derechos reservados.</p>
            <p>
                Desarrollado por Rubén González &nbsp;|&nbsp;
                <a href="https://github.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" style={{ color: '#4FC3F7' }}>
                    GitHub
                </a>
            </p>
        </footer>
    )
}

export default Footer