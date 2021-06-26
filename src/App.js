import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import WebsiteRouting from './config/routes/routes'

function App() {
  return (
    <Router>
      <WebsiteRouting />
    </Router>
  );
}

export default App;
