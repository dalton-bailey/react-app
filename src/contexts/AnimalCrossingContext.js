import React, { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AnimalCrossingContext = createContext({
    bus: [],
    fish: [],
    villagers: [],
})

export const AnimalCrossingContextProvider = (props) => {
    const [bugs, setBugs] = useState([])
    const [fishes, setFishes] = useState([])
    const [villagers, setVillagers] = useState([])

    useEffect(() => {
        const fetchData = async (dataType) => {
            try {
                const result = await axios.get(`https://acnhapi.com/v1a/${dataType}`)

                const data = await result.data
                
                if (dataType === 'bugs') setBugs(data)
                if (dataType === 'fish') setFishes(data)
                if (dataType === 'villagers') setVillagers(data)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchData('bugs')
        fetchData('fish')
        fetchData('villagers')
        
    }, [])

    return (
        <AnimalCrossingContext.Provider value={
            {bugs, fishes, villagers}
        }>
            {props.children}
        </AnimalCrossingContext.Provider>
        )
}

export const useAnmialCrossingContext = () => useContext(AnimalCrossingContext)