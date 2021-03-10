import { createMuiTheme } from '@material-ui/core'
import { pink, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: indigo[500],
    },
  },
})

export default theme
