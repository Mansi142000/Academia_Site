import React from 'react';
import Header from "./components/Header/header.jsx"; 
import Goals from "./components/Design Goals/goals.jsx"; 
import FocusGroups from "./components/Focus Groups/focusGroup.jsx"; 
import Personas from "./components/Personas/personas.jsx"; 
import LowFidelity from "./components/Low Fidelity/lowFidelity.jsx"; 
import HighFidelity from "./components/High Fidelity/highFidelity.jsx"; 
import WizardOfOz from "./components/Wizard of Oz/wizardOfOz.jsx"; 

function App() {
  return (
    <div>
      <Header/>
      <Goals/>
      <FocusGroups/>
      <Personas/>
      <LowFidelity/>
      <WizardOfOz/>
      <HighFidelity/>
    </div>
  );
}

export default App;
