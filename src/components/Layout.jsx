// import Addcleaner from './Addcleaner';
import Nav from './Nav';
// import CleanerDetails from './cleanerDetails';
import ReservationsDetails from './Reservations';
import Home from './Home';


const Layout = () => (
  <div className="container">
    <Nav />
    <Home />
    {/* <CleanerDetails /> */}
    <ReservationsDetails />
  </div>
);

export default Layout;
