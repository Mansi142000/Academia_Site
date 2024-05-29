import React from 'react';
import './wizardOfOz.css';
import wizardImage from '../../assets/images/wizardOfOz.svg';

export default function WizardOfOz() {
    return (
        <header>
            <h1 className="title">Wizard Of Oz</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContent">
                    <p className="para">
                    The "Wizard of Oz" study for the Academia app, provided valuable insights into the app's usability and functionality. The app, aimed at enhancing academic experiences, includes features like scheduling, collaboration tools, and AI-generated notes and quizzes. Participants in the study found the app easy to navigate and appreciated features like AI-enhanced study aids and peer communication.
                    </p >
                    <p className="para">
                    Participants provided feedback through tasks and interviews, suggesting improvements like more intuitive UI design, enhanced communication features, and more personalized scheduling and reminders.
                    </p>
                    <p className="para">
                    Based on the feedback, recommended changes include:
                    </p>
                    <ul className="para">
                        <li>
                        Revamping UI elements for clarity.
                        </li>
                        <li>
                        Integrating communication features more seamlessly.
                        </li>
                        <li>
                        Enhancing personalization in reminders and scheduling.
                        </li>
                    </ul>
                </div>
                <div className="rightContent">
                    <img className='image' src={wizardImage} alt='Wizard Of Oz Image' />
                </div>
            </div>
        </header>
    );
}
