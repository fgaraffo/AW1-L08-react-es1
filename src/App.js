//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Col, Container, Row } from 'react-bootstrap';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <WelcomeButton />
      <p></p>
      <Counter initialCount={7} />
      <p></p>
      <ShortText text='This is a long long text' maxLength={10} />
    </div>
  );
}

function WelcomeButton(props) {
  const [english, setEnglish] = useState(true);
  const toggleLanguage = () => { setEnglish(e => !e) };
  /*return (<button onClick={ () => setEnglish( eng => !eng )}></button>)*/;
  return (<button onClick={toggleLanguage}>
    {english ? 'Hello' : 'Ciao'}
  </button>);
}

//funziona anche con props e props.initialCount, così prendi solo la proprietà che interessa,
//in questo caso è anche l'unica passata
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}<br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

function ShortText(props) {
  const [hidden, setHidden] = useState(true);
  return (
    <span>
      {hidden ? `${props.text.substr(0, props.maxLength)}...` : props.text }
      {hidden ? (
        <a href='#' onClick={ () => setHidden(false) }>more</a>
      ) : (
        <a href='#' onClick={ () => setHidden(true) }>less</a>
      )}
    </span>
  );
}

export default App;
