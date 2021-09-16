import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Lookbook from './Components/Lookbook';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import UserForm from './Components/Register';
import Success from './Components/Success';
import './Style.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pictures" component={Lookbook} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/userForm" component={UserForm} />
        <Route path="/registration-success" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
