import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic,setSelectedTopic]= useState('Please select a button');

  function handleSelect (selectedButton){
   setSelectedTopic (selectedButton);
   console.log(selectedTopic);
   
   
}
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            <CoreConcept 
            {...CORE_CONCEPTS[0]}
            />
             <CoreConcept 
           {...CORE_CONCEPTS[1]}
            />
             <CoreConcept 
            {...CORE_CONCEPTS[2]}
            />
             <CoreConcept 
            title={CORE_CONCEPTS[3].title} 
            description= {CORE_CONCEPTS[3].description}
            image ={CORE_CONCEPTS[3].image}
            />
           
            
          </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={ ()=> handleSelect('component')}>Components</TabButton>
            <TabButton onSelect={ () => handleSelect ('jsx')}>JSX</TabButton>
            <TabButton onSelect={ () => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={ () => handleSelect('state')}>State</TabButton>
          </menu>
         {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
