import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"

export const MarvelApp = () => {

    const {characters} = useCharacters()

    return (
        <>
            <GridCharacters characters={characters}/>
            <Pagination count={10} color="primary" onChange={(e, value) => console.log(value)}/>
        </>
    )
}
  
/*data.results.map((characters) => {
                console.log(characters.name)
                setCharacters(characters.name)
            })*/