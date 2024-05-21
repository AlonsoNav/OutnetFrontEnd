import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile.jsx";
import AdminHeader from "./components/AdminHeader.jsx";
import ProductsAdmin from "./components/ProductsAdmin.jsx";
import ProductsAddAdmin from "./components/ProductsAddAdmin.jsx";
import Header from "./components/Header.jsx";
import Payment from "./components/Payment.jsx";
import MainPage from "./components/MainPage.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import ProductView from "./components/ProductView.jsx";
import ProductsEditAdmin from "./components/ProductsEditAdmin.jsx";
import Inventory from "./components/Inventory.jsx";
import InventoryRequest from "./components/InventoryRequest.jsx";
import commentHistory from './components/commentHistory.jsx';
import NotImplemented from "./components/NotImplemented.jsx";

function App() {
    const renderWithAdminHeader = (Component) => (
        <div className="App">
            <AdminHeader className="App-header sticky-top"/>
            <Component/>
        </div>
    );

    const renderWithHeader = (Component) => (
        <div className="App">
            <Header className="App-header sticky-top"/>
            <Component/>
        </div>
    );

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/products" element={renderWithHeader(Products)}/>
            <Route path="/payment" element={renderWithHeader(Payment)}/>
            <Route path="/view" element={renderWithHeader(ProductView)}/>
            <Route path="/" element={renderWithHeader(MainPage)}/>
            <Route path="/Cart" element={renderWithHeader(Cart)}/>
            <Route path="/Rating-history" element={renderWithHeader(commentHistory)}/>
            <Route path="/profile" element={renderWithHeader(Profile)} />
            <Route path="/admin/products" element={renderWithAdminHeader(ProductsAdmin)} />
            <Route path="/admin/products/add" element={renderWithAdminHeader(ProductsAddAdmin)}/>
            <Route path="/admin/products/edit" element={renderWithAdminHeader(ProductsEditAdmin)} />
            <Route path="/admin/inventory" element={renderWithAdminHeader(Inventory)} />
            <Route path="/admin/inventory/request" element={renderWithAdminHeader(InventoryRequest)} />
            <Route path="/admin/statistics" element={renderWithAdminHeader(NotImplemented)} />
            <Route path="/admin/auctions" element={renderWithAdminHeader(NotImplemented)} />
        </Routes>
    </BrowserRouter>
    )
}

export default App
