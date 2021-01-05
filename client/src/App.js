import logo from './logo.svg';
import './App.css';
import Home from './demo/Home';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Jeopardy from './Jeopardy/Jeopardy';

function App() {
  return (
  <>  
  <NavBar/>
  <Container>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/things' component={Things}/>
     <Route exact path='/jeopardy' component={Jeopardy}/>
     <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
  );
}

export default App;
