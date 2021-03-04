import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'
import useStyles from './styles'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import ScrollToTop from './components/utils/ScrollTop'

const App = () => {
  const classes = useStyles()

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <main className={classes.root}>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </main>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
