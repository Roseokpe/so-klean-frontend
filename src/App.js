import './App.css';
import  {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Addcleaner from './components/Addcleaner'
import Nav from './components/Nav';
import Signup from './components/Signup'
import Reservation from './components/Reservations'


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={ <Reservation/>} />
        {/* <Route path='/reservation' element={ <Reservation/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
