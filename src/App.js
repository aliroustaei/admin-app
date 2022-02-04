import { Route, Switch, Redirect } from "react-router-dom";
//Styles
import styles from "./App.module.css";
//Components
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productsList/ProductsList";
import Product from "./pages/products/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import SidebarMobile from "./components/sidebarMobile/SidebarMobile";
import ProductAdd from "./pages/productsAdd/ProductAdd";
import UserAdd from "./pages/userAdd/UserAdd";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import UsersContextProvider from "./context/UsersContextProvider";

function App() {
  return (
    <>
      <ProductContextProvider>
        <UsersContextProvider>
          <Topbar />
          <div className={styles.container}>
            <Sidebar />
            <SidebarMobile />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={UserList} />
              <Route path="/user/11" component={UserAdd} />
              <Route path="/user/:id" component={User} />
              <Route path="/newuser" component={NewUser} />
              <Route path="/products" component={ProductsList} />
              <Route path="/product/21" component={ProductAdd} />
              <Route path="/product/:id" component={Product} />
              <Route path="/newproduct" component={NewProduct} />
              <Redirect to="/" />
            </Switch>
          </div>
        </UsersContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
