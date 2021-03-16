import { makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    backgroundColor: blue[500],
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: '500',
    color: 'white',
    fontSize: '16px',
    margin: '0 5px',
    '&:hover': {
      cursor: 'pointer',
      color: '#ec407a',
    },
  },

  logo: {
    textDecoration: 'none',
    fontWeight: '500',
    color: 'white',
    fontSize: '22px',
    margin: '0 5px',
    '&:hover': {
      cursor: 'pointer',
      color: '#ec407a',
    },
  },

  toolBar: {
    minHeight: '30px',
    height: '35px',
    width: '100%',
    maxWidth: '1280px',
  },

  menu: {
    padding: '5px',
  },

  item: {
    margin: '10px',
  },

  icon: {
    margin: '0 7px 0 0 ',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },
})

export default useStyles
