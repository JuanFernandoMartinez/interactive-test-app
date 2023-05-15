
import './App.css';
import TestComponent from './components/TestComponent';


let optionsObj = [
  {
    txt: "hola mundo",
    correct: false
  },
  {
    txt: "hola mundo",
    correct: false
  },
  {
    txt: "hola mundo",
    correct: true
  },
  {
    txt: "hola mundo",
    correct: false
  }
]


let test = {
  options : optionsObj.map(e=>e.txt),
  time : 10,
  question: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido ",
  rightOption : optionsObj.indexOf(optionsObj.filter(e=>{
    return (e.correct === true) 
  })[0])
    

  
}

function App() {
  

  
  return (
    <div>
      <TestComponent test = {test}/>
    </div>
  );
}

export default App;
