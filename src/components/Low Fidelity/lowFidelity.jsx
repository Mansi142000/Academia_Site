import React from 'react';
import './lowFidelity.css';
import lowFidImage from '../../assets/images/lowFid.svg';
import lowFidPdf from '../../assets/pdfs/Low Fidelity prototype.pdf';

export default function lowFidelity() {
    const openPDFInNewTab = () => {
        window.open(lowFidPdf, '_blank');
    };

    return (
        <header>
            <h1 className="title">Low Fidelity Prototype</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContent">
                    <img className='image' src={lowFidImage} alt='Low Fidelity Image' />
                </div>
                <div className="rightContent">
                    <p className="para">Low-fidelity prototypes are simple, cost-effective tools used in early app development. Created typically with paper, these prototypes provide a basic visual layout of an app's design, allowing quick exploration of concepts and identification of usability issues. This method enables rapid iteration and feedback integration, ensuring that user needs are prioritized from the start without significant resource investment.</p>
                    <button onClick={openPDFInNewTab} className="pdfButton">Low Fidelity Prototype</button>
                </div>
            </div>
        </header>
    );
}
