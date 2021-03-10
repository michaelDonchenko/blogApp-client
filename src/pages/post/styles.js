import { makeStyles } from '@material-ui/core'
import { pink, deepOrange, deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    minHeight: '400px',
    margin: theme.spacing(4, 'auto'),
    padding: '0 0 20px 0',
  },

  header: {
    margin: theme.spacing(5, 0),
    textAlign: 'center',
    color: pink[500],
    background: pink[50],
  },

  body: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },

  post: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
    },
  },

  hr: {
    borderColor: pink[500],
    margin: theme.spacing(3, 0),
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  buttonLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  flexDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'left',
  },

  image: {
    height: '150px',
    marginLeft: '15px',
  },

  button: {
    margin: theme.spacing(1, 2),
    minWidth: '100px',
  },

  deleteButton: {
    margin: theme.spacing(1, 2),
    color: deepOrange[500],
  },

  updateButton: {
    margin: theme.spacing(1, 2),
    color: deepPurple[500],
  },
}))

export default useStyles
