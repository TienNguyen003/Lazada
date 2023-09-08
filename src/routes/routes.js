import routesConfig from '../config/routes';

// pages
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import SalesTogether from '../pages/salesTogether/salesTogether';
import FamiliarPass from '../pages/familiarPass/familiarPass';
import CheckOrder from '../pages/checkOrder/checkOrder';
import PaymentOrder from '../pages/CSKH/PaymentOrder/paymentOrder';
import Delivery from '../pages/CSKH/Delivery/delivery';
import Lazflash from '../component/ingredient/LazFlash/lazflash';
import LinkApp from '../component/ingredient/LinkApp/linkApp';
import SearchResults from '../component/ingredient/SeachResult/seachResult';
import ProductsResults from '../component/ingredient/ProductsResult/productsResult';
import DetailLazMall from '../component/ingredient/DetailLazMall/detailLazMall';
import AccountInfo from '../component/ingredient/AccountInfo/AccountInfo';

// public routes
const publicRoutes = [
    { path: routesConfig.Home, component: Home },
    { path: routesConfig.Login, component: Login },
    { path: routesConfig.Register, component: Register },
    { path: routesConfig.SalesTogether, component: SalesTogether },
    { path: routesConfig.FamiliarPass, component: FamiliarPass },
    { path: routesConfig.CheckOrder, component: CheckOrder },
    { path: routesConfig.PaymentOrder, component: PaymentOrder },
    { path: routesConfig.Delivery, component: Delivery },
    { path: routesConfig.LazFlash, component: Lazflash },
    { path: routesConfig.LinkApp, component: LinkApp },
    { path: routesConfig.SearchResults, component: SearchResults },
    { path: routesConfig.ProductsResults, component: ProductsResults },
    { path: routesConfig.DetailLazMall, component: DetailLazMall },
    { path: routesConfig.AccountInfo, component: AccountInfo },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
