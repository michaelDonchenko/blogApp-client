import { createMuiTheme } from '@material-ui/core'
import { pink, blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: blue[500],
    },
  },
})

export default theme
