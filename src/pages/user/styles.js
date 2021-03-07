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

  image: {
    display: 'flex',
    margin: '20px auto',
    border: '1px solid',
    [theme.breakpoints.down('xs')]: { maxWidth: '90%', maxHeight: '250px' },
    [theme.breakpoints.up('sm')]: { maxWidth: '100%', height: '350px' },
    boxShadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  },

  link: {
    textDecoration: 'underline',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },

  flexDiv: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
  },

  accordionStyle: {
    margin: '30px 20px 0 20px',
    '& .MuiAccordionSummary-root': {
      minHeight: '30px',
      height: '30px',
    },
  },

  imagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  imageInContainer: {
    height: '80px',
    margin: '10px',
    '&:hover': {
      border: '1px solid',
      cursor: 'pointer',
    },
  },

  inputField: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    marginBottom: '20px',
    width: '90%',
    margin: '15px 0',
  },

  detailsForm: {
    padding: '10px',
  },
}))

export default useStyles
