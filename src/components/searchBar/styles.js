import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: grey[200],
    '&:hover': {
      backgroundColor: grey[300],
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(4, 2),
    },
    margin: theme.spacing(4, 6),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputInput: {
    display: 'flex',
    flex: 1,
  },
}))

export default useStyles
