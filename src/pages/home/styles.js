import { makeStyles } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
  },

  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    minHeight: '400px',
    margin: theme.spacing(4, 'auto'),
    padding: '0 0 20px 0',
  },

  header: {
    margin: theme.spacing(2, 0),
  },

  postsContainer: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },

  post: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
    },
  },

  topHr: {
    borderColor: 'gray',
    width: '80%',
  },

  hr: {
    borderColor: pink[500],
    width: '80%',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export default useStyles
