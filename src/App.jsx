import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';


function App() {
  function handleSelect (){
    console.log('Hello World');
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
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
