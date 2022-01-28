import { Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <SidebarMobile />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:id" component={User} />
          <Route path="/newuser" component={NewUser} />
          <Route path="/products" component={ProductsList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
        </Switch>
      </div>
    </>
  );
}

export default App;
