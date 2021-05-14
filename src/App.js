import { useState } from "react";
import twitter from "../src/media/twitter.png"
// import ListaQuotes from "./Quotes";
import './App.css';
import data from "./quotes.json";

function App() {

  //const quotes = ListaQuotes();     //Componentes
  const quotes = data;

  //Validación - condición

  const getRandom = () => {} // Numero al azar
  const initialNumber = getRandom()
  const [author, setAuthor] = useState(quotes.quotes[initialNumber])

  const handleChange = () => {}

  return (
    <div className="Bg-5" style={{ backgroundColor: randomColor }}>          {/*Contenedor base que cambiará fondo*/}

      <div className="App">

        {console.log(quotes.quotes[80])}     {/*Se tiene que cargar primero la pagina y luego refrescar para poder mostrar datos*/}

        

        <div className="Container">
          <h3><span>“</span>Life isn’t about getting and having, it’s about giving and being - {quote}</h3>
          <h5>-Kevin Kruse - {author}</h5>
          <a className="Logo"
            href="https://twitter.com/intent/tweet?text=%C2%A1Busca%20tu%20cita%20ideal!%20con%20https%3A//www.google.com.mx/"
            target="_blank"> <img src={twitter} /> </a>
        </div>

      </div>

    </div>
  );
}

export default App;
