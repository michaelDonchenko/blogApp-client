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
    border: '2px solid',
    margin: theme.spacing(4, 'auto'),
    padding: '0 0 20px 0',
    borderRadius: '1em',
  },
  heading: {
    margin: theme.spacing(3, 0),
  },

  headingIcon: {
    fontSize: '34px',
    marginTop: '5px',
  },

  link: {
    textDecoration: 'underline',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}))

export default useStyles
