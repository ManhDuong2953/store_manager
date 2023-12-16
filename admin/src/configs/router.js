import DashBoardPage from "../pages/DashBoard/DashBoardPages";
import ProfileEditPages from "../pages/Profile/ProfileEdit/myProfileEdit";
import MyProfile from "../pages/Profile/myProfile";
import SignupPage from "../pages/signupPage/signupPage";
import LoginPage from "../pages/loginPages/loginPage";
import TopRanking from "../pages/TopRanking/TopRanking";
import AnalystEmployee from "../components/AnalystEmployee/AnalystEmployee";
import productManagement from "../pages/productManagement/productManagement";
import ProductIn from "../pages/ProductIn/ProductIn";
import ProductOut from "../pages/ProductOut/ProductOut";
import EmployeeManaged from "../pages/EmployeeManaged/EmployeeManaged";

const router = [
  {
    path: "/",
    component: MyProfile,
    navBar: true,
  },
  {
    path: "/admin",
    component: DashBoardPage,
    navBar: true,
    children: [
      {
        path: "dashboard", // Đường dẫn tương đối của tuyến con
        component: DashBoardPage,
        navBar: true,
      },
      {
        path: "profile/edit/:id",
        component: ProfileEditPages,
        navBar: true,
      },
      {
        path: "profile/update/:id",
        component: ProfileEditPages,
        navBar: true,
      },
      {
        path: "profile",
        component: MyProfile,
        navBar: true,
      },
      {
        path: "managedEmployee",
        component: EmployeeManaged,
        navBar: true,
      },
    ],
  },
  {
    path: "/profile/:id",
    component: MyProfile,
    navBar: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "top_ranking",
    component: TopRanking,
    navBar: true,
  },
  {
    path: "/employee",
    component: AnalystEmployee,
    navBar: true,
    children: [
      {
        path: 'productManagement',
        component: productManagement,
        navBar: true,
      },
      {
        path: 'productSale',
        component: ProductOut,
        navBar: true,
      },
      {
        path: 'productIn',
        component: ProductIn,
        navBar: true,
      }
    ]
  }


];

export default router;

