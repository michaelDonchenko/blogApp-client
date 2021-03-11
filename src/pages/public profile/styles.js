import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
  },
  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    height: 'fit-content',
    minHeight: '500px',
    border: '2px solid',
    margin: theme.spacing(4, 'auto'),
    padding: '0 0 20px 0',
    borderRadius: '1em',
  },
  heading: {
    margin: theme.spacing(3, 0),
  },

  image: {
    display: 'flex',
    margin: '20px auto',
    border: '1px solid',
    [theme.breakpoints.down('xs')]: { maxWidth: '90%', maxHeight: '250px' },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '95%',
      maxHeight: '350px',
      minHeight: '300px',
    },
    boxShadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },

  flexDiv: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
  },

  textField: {
    margin: '10px',
  },
}))

export default useStyles
