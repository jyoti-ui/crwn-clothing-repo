import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';

// const HatsPage = (props) => {
//   console.log(props)
//   return (
//   <div>
//     {/* <Link to="/"> Home Page </Link> */}
//     <h1> HATS PAGE </h1>
//   </div>
// )
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
