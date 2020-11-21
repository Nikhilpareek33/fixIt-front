import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavbarComponent from './Components/navbar';
import Footer from './Components/footer';
import Home from './routes/home.js';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ServiceProviderProfile from './routes/serviceProviderProfile'
import Chat from './routes/chat';
import Browse from './routes/browse';

const store = configureStore();
function App() {
  console.log(store);
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <NavbarComponent/>
          <ServiceProviderProfile/>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} /> */}
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>    
    </Provider>
  );
}

export default App;
