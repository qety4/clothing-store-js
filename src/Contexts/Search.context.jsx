import { createContext, useState } from "react";




export const SearchContext = createContext({
    searchValue:'',
    updateSearch: () => { },
    handleChange:()=>{ },
    searchReset:()=>{}
})


export const SearchProvider = ({ children }) => {
    const [searchValue,setSearch] = useState('')


    console.log(searchValue)

    const updateSearch = (e) => {
        const searchValueNew = e.target[0].value
        console.log(searchValueNew)
        setSearch(searchValueNew)
        e.target[0].value = ''
    }

    const handleChange = (e)=>{
        const newValue=e.target.value
        setSearch(newValue)
    }
    const searchReset = ()=>{
        setSearch('')
    }

    const value = {
        searchValue,
        updateSearch,
        handleChange,
        searchReset
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>

}

