import AnalystEmployee from "../components/AnalystEmployee/AnalystEmployee";
import DashBoardPage from "../pages/DashBoard/DashBoardPages";
import EmployeeManaged from "../pages/EmployeeManage/EmployeeManage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProductIn from "../pages/ProductIn/ProductIn";
import ProductManagement from "../pages/ProductManage/ProductManage";
import ProductOut from "../pages/ProductOut/ProductOut";
import ProfileEditPages from "../pages/Profile/ProfileEdit/MyProfileEdit";
import MyProfile from "../pages/Profile/MyProfile";
import TopRanking from "../pages/TopRanking/TopRanking";
import SignupPage from "../pages/SignupPage/SignupPage";


const router = [
  {
    path: "/",
    component: LoginPage,
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
    path: "profile",
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
        path: "managedEmployee",
        component: EmployeeManaged,
        navBar: true,
      },
    ],
  },

  {
    path: "/employee",
    component: AnalystEmployee,
    navBar: true,
    children: [
      {
        path: 'productManagement',
        component: ProductManagement,
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

