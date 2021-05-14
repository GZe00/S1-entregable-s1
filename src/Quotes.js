import { useEffect, useState } from "react";


const ListaQuotes = () => {

    const [quotes, setQuotes] = useState([]);

    // fetch("quotes.json")
    //     .then(response => response.json())
    //     .then(data => setQuotes(data))


    useEffect( () => {
        fetch("quotes.json")
            .then(response => response.json())
            .then(datos => {
                setQuotes(datos)
        })
    }, []);

    return quotes;
}

export default ListaQuotes; 
