import { createContext, useState } from "react";




export const SearchContext = createContext({
    searchValue:'',
    updateSearch: () => { }
})


export const SearchProvider = ({ children }) => {
    const [searchValue,setSearch] = useState('')


    console.log(searchValue)

    const updateSearch = (e) => {

        const searchValue = e.target[0].value
        console.log(searchValue)
        setSearch(searchValue)
        e.target[0].value = ''
    }
    const value = {
        searchValue,
        updateSearch
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>

}

