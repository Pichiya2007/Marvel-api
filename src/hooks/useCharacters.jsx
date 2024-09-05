import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState()
 
    useEffect(() => {
        //Si si tiene dependencias, solo se ejecuta en la primera carga del componente
        //Si no tiene dependencias, se ejecuta cada que la dependencia cambia
        reqCharacters().then((data) => {
            setCharacters(data.results)
        })
    }, [])

    //Retorno del Hook
    return {
        characters,
    }
}
