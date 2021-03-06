import { makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
  },

  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    height: 'fit-content',
    border: '2px solid',
    margin: theme.spacing(4, 'auto'),
    padding: '0 0 20px 0',
    borderRadius: '1em',
    minHeight: '300px',
  },

  header: {
    margin: theme.spacing(2, 0),
  },

  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  footer: {
    margin: theme.spacing(6, 0),
  },

  link: {
    textDecoration: 'underline',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },

  button: {
    margin: theme.spacing(2, 0),
  },

  appBar: {
    position: 'relative',
    backgroundColor: blue[500],
  },

  toolBar: {
    minHeight: '30px',
  },
}))

export default useStyles
