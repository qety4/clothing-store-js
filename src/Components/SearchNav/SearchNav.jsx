import './searchNav.styles.scss'
import search from '../../assets/svgs/search.svg'
import { SearchContext } from '../../Contexts/Search.context'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchNav = () => {
    const [searchVisible,setSearch] = useState(false)
    const { updateSearch } = useContext(SearchContext)
    const navigate = useNavigate()
    
    const setVisisible = ()=>{
        setSearch(!searchVisible)
    }

    const promptSearch = (e) => {
        e.preventDefault()
        searchVisible && setVisisible()
        navigate('/shop')
        updateSearch(e)
    }


    return (
        <>
            <div className={searchVisible ? 'nav-search-container search-toggle':'nav-search-container'}>
                <img src={search} onClick={setVisisible} className='search-svg-toggle' alt="" />
                <form className='nav-search-form' action="submit" onSubmit={promptSearch}>
                    <input className='search-input' type="text" />
                    <button className='search-btn'>
                    <img src={search} className='search-svg' alt="" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchNav