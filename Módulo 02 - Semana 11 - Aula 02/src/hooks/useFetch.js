//Uso de Hooks
import { useEffect, useState} from "react";

function useFetch (url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    
    useEffect (() => {
    setLoading(true);
    fetch (url)
    .then((res) => res.json())
    .then((value) => {
    setData(value);
    })

    .catch((err) => {
        window.alert("Ocorreu um ero ao buscar os dados");
        console.error(err);
    })

    .finally(() => setLoading(false));
    }, [url]);

    return[data, loading];

}

export default useFetch;