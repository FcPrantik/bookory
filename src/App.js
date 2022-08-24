import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Admin from './Pages/Admin/Admin';
import Deals from './Pages/Deals/Deals';
import Header from './Pages/Header/Header';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import EditBook from './Pages/EditBook/EditBook';
import Checkout from './Pages/Checkout/Checkout';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateOutlet from './Pages/PrivateOutlet/PrivateOutlet';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="order" element={<Order />} />
              <Route path="book/:bookID" element={<Checkout />} />
              <Route path="admin" element={<Admin />} />
              <Route path="admin/managebooks" element={<ManageBooks />} />
              <Route path="admin/editbook" element={<EditBook />} />
            </Route>
            <Route path="/deals" element={<Deals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
