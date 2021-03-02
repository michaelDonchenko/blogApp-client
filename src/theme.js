import { createMuiTheme } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
  },
})

export default theme
