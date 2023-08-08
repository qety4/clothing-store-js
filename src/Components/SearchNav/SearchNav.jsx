import './searchNav.styles.scss'
import search from '../../assets/svgs/search.svg'
import { SearchContext } from '../../Contexts/Search.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchNav = () => {
    const { updateSearch } = useContext(SearchContext)
    const navigate = useNavigate()

    const promptSearch = (e) => {
        e.preventDefault()
        updateSearch(e)
        navigate('/shop')
    }


    return (
        <>
                <form className='nav-search' action="submit" onSubmit={promptSearch}>
                    <input className='search-input' type="text" />
                    <button className='search-btn'>
                    <img src={search} className='search-svg' alt="" />
                    </button>
                </form>
        </>
    )
}

export default SearchNav