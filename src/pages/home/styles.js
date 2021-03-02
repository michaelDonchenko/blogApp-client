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
}))

export default useStyles
