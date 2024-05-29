import React from 'react';
import './focusGroup.css';
import focusGroup from '../../assets/images/focusGrp.svg';

export default function Goals() {
    return (
        <header>
            <h1 className="title">Focus Groups</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContentF">
                    <img className='focusGrpImg' src={focusGroup} alt='Focus Group Image' />
                </div>
                <div className="rightContentF">
                    <h2>Overview</h2>
                    <p>Conducted focus group sessions to gather user insights on the "Academia" platform, an innovative solution aimed at enhancing academic collaboration and learning. The goal was to assess the platform's design, functionality, and usability, and to identify the needs, preferences, and challenges of students.</p>
                    <h2>Sessions and Participants</h2>
                <ul>
                    <li><strong>Total Sessions:</strong> Two focus group sessions, each lasting about 30 minutes.</li>
                    <li><strong>Participants:</strong> Seven graduate students from diverse majors including Project Management, Sustainable Building Systems, and Computer Science.</li>
                </ul>
                <h2>Methodology</h2>
                <p>Participants were recruited from the team's acquaintances to ensure a mixture of perspectives. Sessions were held both in-person and via Zoom to accommodate participants' preferences. Discussions centered around participants' current academic workflows, communication tools, study habits, and experiences with existing platforms.</p>                
                </div>
            </div>
            <div className='focusGrpSummary' >
                <h2>Key Findings from Focus Groups</h2>
                <ul>
                    <li><strong>Communication and Document Sharing:</strong> Preferred methods include WhatsApp, email, and Microsoft Teams. There's a strong demand for integrating seamless communication and document sharing within "Academia."</li>
                    <li><strong>Note-Taking and Study Apps:</strong> Commonly used methods include pen and paper, iPads, and Google Docs. Participants favored AI-enhanced note-taking that could summarize key information efficiently.</li>
                    <li><strong>Quizzes and Study Groups:</strong> Quizzes are considered an effective assessment tool. Study groups are valued but are not universally preferred; those who participate prefer regular, scheduled sessions.</li>
                    <li><strong>Academic Organization:</strong> Many rely on digital calendars; however, some lack a clear study schedule. There is skepticism about AI-generated study plans due to concerns over the accuracy and relevance of the content.</li>
                </ul>
                <h2>Revised Design Goals</h2>
                <ul>
                    <li><strong>Enhanced Communication Tools:</strong> Development of features for easy communication and document sharing.</li>
                    <li><strong>AI-Driven Note-Taking:</strong> Implementation of note-taking features that highlight essential information and offer concise summaries.</li>
                    <li><strong>Interactive Quizzes and Study Group Features:</strong> Integration of regular quizzes and customizable study group functionalities.</li>
                    <li><strong>Personalized Academic Organization Tools:</strong> Development of user-friendly tools for scheduling and organizing academic tasks with AI optimization.</li>
                </ul>
                <h2>Conclusion</h2>
                <p>The focus groups were instrumental in refining the "Academia" platform's design goals. While some goals were adjusted based on user feedback, others, like the emphasis on intuitive design, remained unchanged due to strong participant support. These sessions provided crucial insights that will guide the platform's development to better meet the needs of its users.</p>
            </div>        
        </header>
    );
}
