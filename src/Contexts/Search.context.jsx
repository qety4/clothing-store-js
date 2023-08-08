import { createContext, useState } from "react";




export const SearchContext = createContext({
    searchValue:'',
    updateSearch: () => { },
    handleChange:()=>{ },
    shopMount:()=>{}
})


export const SearchProvider = ({ children }) => {
    const [searchValue,setSearch] = useState('')


    console.log(searchValue)

    const updateSearch = (e) => {
        if(e.type==='click'){
            setSearch('')
            return
        }
        const searchValueNew = e.target[0].value
        console.log(searchValueNew)
        setSearch(searchValueNew)
        e.target[0].value = ''
    }

    const handleChange = (e)=>{
        const newValue=e.target.value
        setSearch(newValue)
    }
    const shopMount = ()=>{
        setSearch('')
    }

    const value = {
        searchValue,
        updateSearch,
        handleChange,
        shopMount
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>

}

