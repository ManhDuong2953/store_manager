const API_ADDRESS = "http://localhost:8080"
// api employee
const API_POST_EMPLOYEE = API_ADDRESS + "/employee/register/"
const API_DELETE_EMPLOYEE = API_ADDRESS + "/employee/delete/"
const API_UPDATE_EMPLOYEE = API_ADDRESS + "/employee/update/"
const API_FILTER_EMPLOYEE = API_ADDRESS + "/employee/search/"
const API_GET_ALL_EMPLOYEE = API_ADDRESS + "/employee/all"
const API_GET_EMPLOYEE_BY_ID = API_ADDRESS + "/employee/"

//api product
const API_GET_ALL_PRODUCT = API_ADDRESS + "/product/"
const API_POST_PRODUCT = API_ADDRESS + "/product/addproduct"
const API_DELETE_PRODUCT = API_ADDRESS + "/product/delete"
const API_UPDATE_PRODUCT = API_ADDRESS + "/product/"
const API_FILTER_PRODUCT = API_ADDRESS + "/product/search"
const API_GET_PRODUCT_BY_ID = API_ADDRESS + "/product/detail/"

// api supplier 
const API_POST_SUPPLIER = API_ADDRESS + "/supplier/add/"
const API_DELETE_SUPPLIER = API_ADDRESS + "/supplier/delete/"
const API_UPDATE_SUPPLIER = API_ADDRESS + "/supplier/update/"
const API_FILTER_SUPPLIER = API_ADDRESS + "/supplier/search/"
const API_GET_ALL_SUPPLIER = API_ADDRESS + "/supplier/all"
const API_GET_SUPPLIER_BY_ID = API_ADDRESS + "/supplier/"


const API_LOGIN_USER = API_ADDRESS + "/auth/login"
const API_LOGOUT_USER = API_ADDRESS + "/auth/logout"







export {
    API_LOGIN_USER,
    API_GET_ALL_EMPLOYEE,
    API_UPDATE_EMPLOYEE,
    API_DELETE_EMPLOYEE,
    API_POST_EMPLOYEE,
    API_FILTER_EMPLOYEE,
    API_GET_EMPLOYEE_BY_ID,

    API_GET_ALL_PRODUCT,
    API_POST_PRODUCT,
    API_DELETE_PRODUCT,
    API_UPDATE_PRODUCT,
    API_FILTER_PRODUCT,
    API_GET_PRODUCT_BY_ID,

    API_POST_SUPPLIER,
    API_DELETE_SUPPLIER,
    API_UPDATE_SUPPLIER,
    API_FILTER_SUPPLIER,
    API_GET_ALL_SUPPLIER,
    API_GET_SUPPLIER_BY_ID,
    

    API_LOGOUT_USER

}