
import './App.css';
import TestComponent from './components/TestComponent';

let test = {
  options : [
    "opcion 1",
    "opcion 2",
    "opcion 3",
    "opcion 4"
  ],
  time : 10,
  question: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido ",
  rightOption : 2
    

  
}

function App() {
  return (
    <div>
      <TestComponent test = {test}/>
    </div>
  );
}

export default App;
