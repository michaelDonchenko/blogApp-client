import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import styles from './styles'

const SearchBar = ({ keyword, setKeyword }) => {
  const classes = styles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search…'
        className={classes.inputInput}
      />
    </div>
  )
}

export default SearchBar
