

const axios = require ("axios");

const traePersonajes = async () =>{
    let resultado = await axios.get("https://rickandmortyapi.com/api/character")
    return resultado
}

traePersonajes()
    .then(
        res =>{console.log(res)}
    )
    .catch(
        error => (console.log(error))
    )