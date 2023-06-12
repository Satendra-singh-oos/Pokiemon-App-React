import React, { createContext } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'


export const pokimonContext = createContext()

export const AppProvider = ({children}) =>{

    const [pokiemon,setPokiemon] = useState({
        name : "",
        species : "",
        type  :"" ,
        img :"" ,
        hp:"",
        attack : "",
        defense: "",
        experience : "",
    })

    const [foundPokie , setFoundPokie] =useState(false)
    //fetching data from API 
  const fetchPokiemonData  = useCallback((searchText)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
    .then(res =>{
      console.log(res.data)
      console.log(res.data.name)   
      setPokiemon({
        name : res.data.name,
        species : res.data.species.name,
        type  : res.data.types[0].type.name,
        img : res.data.sprites.front_default,
        hp:res.data.stats[0].base_stat,
        attack : res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        experience : res.data.base_experience,
      })
   })

   setFoundPokie(true)
 },[])

    return (
        <pokimonContext.Provider value={{fetchPokiemonData , pokiemon , foundPokie }}>{children}</pokimonContext.Provider>
    )
}


export const useGlobalContext =() =>{
    return useContext(pokimonContext)
}
