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
  },

  flexDiv2: {
    display: 'flex',
    justifyContent: 'center',
  },

  image: {
    height: '80px',
    margin: ' 0 15px',
  },

  button: {
    margin: theme.spacing(3, 2, 2, 2),
    minWidth: '100px',
  },

  dialogFlex: {
    display: 'flex',
    flexDirection: 'column',
  },

  userDiv: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
  },

  select: {
    width: '350px',
    maxWidth: '90%',
    margin: theme.spacing(2, 0),
  },
}))

export default useStyles
