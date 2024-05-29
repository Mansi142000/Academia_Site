import React from 'react';
import './highFidelity.css';
import highFidImage from '../../assets/images/highFid.svg';
import highFidPdf from '../../assets/pdfs/academia.pdf';

export default function HighFidelity() {
    const openPDFInNewTab = () => {
        window.open(highFidPdf, '_blank');
    };

    return (
        <header>
            <h1 className="title">High Fidelity Prototype</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContent">
                    <img className='image' src={highFidImage} alt='High Fidelity Image' />
                </div>
                <div className="rightContent">
                    <p className="para">A high-fidelity prototype is an advanced, interactive version of a product design that closely resembles the final product. It includes detailed visual assets, functional widgets, and realistic navigation and interaction flows. This prototype is crucial for testing design decisions and user interactions, allowing for detailed feedback and refinements before the final development.</p>
                    <button onClick={openPDFInNewTab} className="pdfButton">High Fidelity Prototype</button>
                </div>
            </div>
        </header>
    );
}
