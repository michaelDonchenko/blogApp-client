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
  },
  navButton: {
    color: 'white',
    fontWeight: '500',
  },
  mainButton: {
    color: 'white',
    margin: '5px 0 10px 0',
    fontSize: '20px',
    padding: 0,
  },
  toolBar: {
    minHeight: '20px',
    width: '100%',
    maxWidth: '1280px',
  },
})

export default useStyles
