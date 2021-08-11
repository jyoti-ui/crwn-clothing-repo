import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import React from 'react';

// const HatsPage = (props) => {
//   console.log(props)
//   return (
//   <div>
//     {/* <Link to="/"> Home Page </Link> */}
//     <h1> HATS PAGE </h1>
//   </div>
// )
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
}
}

export default App;
