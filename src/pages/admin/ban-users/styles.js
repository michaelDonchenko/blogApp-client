import { makeStyles } from '@material-ui/core'

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

  userDiv: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
  },

  flexDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: theme.spacing(4, 0),
  },

  flexDiv2: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },

  image: {
    height: '100px',
    margin: ' 0 15px',
  },

  button: {
    margin: theme.spacing(1, 2),
    minWidth: '100px',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  select: {
    width: '100px',
    maxWidth: '90%',
    margin: theme.spacing(2, 0, 3, 0),
  },
}))

export default useStyles
