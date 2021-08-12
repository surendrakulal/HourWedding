import React, {useEffect} from 'react'
import Welcome from './Welcome'
import Contact from './Contact'
import {Link, Route} from 'react-router-dom'
import {Grid, Paper, Button, Typography, Container} from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = (props) => {
  useEffect(()=>{
    <Welcome/>
  })
  return (
    <Container>
    <Grid>
      <Paper>
        <Grid container>
        <Grid style = {{textAlign: "center"}}>
            <Button component = {Link} to = "./welcome"><img width= "80%" height= "100%" alt = "title_img" src="https://static1.squarespace.com/static/5a5683a5dc2b4a49e4390ac4/t/5e99cc31e967a27db493a3f2/1617272666008/?format=1500w"/></Button>
        </Grid>
        </Grid>
        <Grid container>
          <Grid sm = {4}>
            <Typography style = {{fontFamily: 'Raleway', color: "#8d6235"}}>GIBRALTAR - SPAIN</Typography>
          </Grid>
          <Grid style = {{textAlign: "center"}} sm = {4}>
            <Typography style = {{fontFamily: 'Raleway', color: "#8d6235"}}>INFO@HOURWEDDINGS.COM</Typography>
          </Grid>
          <Grid style = {{textAlign: "right"}} sm = {4}>
            <Typography style = {{fontFamily: 'Raleway', color: "#8d6235"}}>+350 58009685</Typography>
          </Grid>
        </Grid>
        <hr/>
        <Button style = {{color: "#8d6235"}} component = {Link} to = "/welcome">Welcome</Button>
        <Button style = {{color: "#8d6235"}} component = {Link} to = "/contact">Contact</Button>
        <hr/>
        <Route path = "/welcome" component = {Welcome} exact = {true}/>
        <Route path = "/contact" component = {Contact}/>
      </Paper>
      </Grid>
      </Container>
  )
}
export default App