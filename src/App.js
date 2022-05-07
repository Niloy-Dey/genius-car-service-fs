import { Route, Routes } from 'react-router-dom';
import './App.css';
import Order from './Order/Order';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import ManageServices from './Pages/ManageServices/ManageServices';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
 
  return (
    <div>
      <Header></Header>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}> </Route>
        <Route path='/details' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/addService' element={<AddService></AddService>}></Route>
        <Route path='/addService' element={<AddService></AddService>}></Route>
        <Route path='/ManageServices' element={<ManageServices></ManageServices>}></Route>
        <Route path='/checkout/:service_Id' element={<Checkout></Checkout>}></Route>
        <Route path='order' element={<Order></Order>}></Route>

    </Routes>
    <Footer></Footer>
    </div>  
)
}
export default App;


