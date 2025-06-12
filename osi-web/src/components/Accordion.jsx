import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import './Accordion.css';

function Accordion({ title, children, id, openSignal }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (openSignal?.id === id) {
            setIsOpen(true); // abrir si el signal coincide
        }
    }, [openSignal, id]);

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="accordion">
            <button className="accordion-button" onClick={toggleAccordion}>
                <span>{title}</span>
                <ChevronDownIcon className={`icon ${isOpen ? 'rotate' : ''}`} />
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default Accordion;