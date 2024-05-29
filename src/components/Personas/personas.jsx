import React from 'react';
import './personas.css';
import personaImage from '../../assets/images/personas.svg';
import personasPDF from '../../assets/pdfs/Personas.pdf';

export default function PersonasComponent() {
    const openPDFInNewTab = () => {
        window.open(personasPDF, '_blank');
    };

    return (
        <header>
            <h1 className="title">Personas</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContent">
                    <p className="para">Creating personas involves building fictional characters based on user research to represent the various user types who might use an app. These personas include demographic information, motivations, goals, and behaviors, often accompanied by a visual representation like a drawing or photo. Each persona is named and given a story to contextualize their background, occupation, age, and social situation, making them relatable and useful for understanding the target audience deeply.</p>
                    <button onClick={openPDFInNewTab} className="pdfButton">Personas</button>
                </div>
                <div className="rightContent">
                    <img className='image' src={personaImage} alt='Academia Persona Image' />
                </div>
            </div>
        </header>
    );
}
