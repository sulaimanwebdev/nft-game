import Home from './pages/Home';
import Header from './Header';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './fonts/EvilEmpire.otf';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Switch>
        <Route path="/" exact exact component={Home} />
   </Switch>
   </BrowserRouter>

   </>
  );
}

export default App;
