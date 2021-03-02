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
    },
  },

  logo: {
    textDecoration: 'none',
    fontWeight: '500',
    color: 'white',
    fontSize: '22px',
    margin: '0 5px',
  },

  toolBar: {
    minHeight: '30px',
    width: '100%',
    maxWidth: '1280px',
  },
})

export default useStyles
