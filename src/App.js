import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import Home from './components/home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>

  );
}

export default App;
