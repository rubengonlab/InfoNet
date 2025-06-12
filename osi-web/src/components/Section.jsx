import Accordion from "./Accordion.jsx";

function Section({ id, title, children, openSignal={openSignal} }) {
    return (
        <section id={id} className="custom-section">
            <Accordion title={title} id={id} openSignal={openSignal} >
                {children}
            </Accordion>
        </section>
    );
}

export default Section;