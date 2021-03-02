import { makeStyles } from '@material-ui/core'
import blogImage from './images/background3.jpg'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${blogImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
  },
})

export default useStyles
