import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import styles from './styles'

const SearchBar = ({ keyword, setKeyword, search }) => {
  const classes = styles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon onClick={search} />
      </div>

      <InputBase
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            return search()
          }
        }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search…'
        className={classes.inputInput}
      />
    </div>
  )
}

export default SearchBar
