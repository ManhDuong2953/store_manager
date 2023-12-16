import HomePage from "../pages/homePages/homePages";
import LoginPage from "../pages/loginPages/loginPage";
import SignupPage from "../pages/signupPage/signupPage";
import NavBarLayout from "../component/NavBarLayout/NavBarLayout";
import CartPage from "../pages/cartShop/CartLayout";
import BillBought from "../component/BillBought/BillBought";
import BillBoughtDetails from "../component/BillBoughtDetails/BillBoughtDetails";
import SearchPage from "../pages/searchPages/SearchPage";
import ProductInview from "../pages/ProductInviews/ProductInview";
import ProfilePages from "../pages/Profile/myProfile";
import SaleInfo from "../component/SaleInfo/SaleInfo";
import FooterLayout from "../component/FooterLayout/FooterLayout";

const router = [
  {
    path: "/",
    component: HomePage,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/login",
    component: LoginPage,
    layoutDefaults: false,
  },
  {
    path: "/signup",
    component: SignupPage,
    layoutDefaults: false,
  },
  {
    path: "/cart",
    component: CartPage,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/bill_bought",
    component: BillBought,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/bill_bought/:id",
    component: BillBoughtDetails,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/search",
    component: SearchPage,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/inview/:id",
    component: ProductInview,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/profile/:id",
    component: ProfilePages,
    layoutDefaults: [NavBarLayout, FooterLayout],
  },
  {
    path: "/rank_info",
    component: SaleInfo,
    layoutDefaults: [NavBarLayout, FooterLayout],
  }

];

export default router;
