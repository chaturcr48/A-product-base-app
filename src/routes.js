import BuyAgain from './components/BuyAgain';
import PartnerPincode from './components/PartnerPincode';
import ProductSlider from './components/ProductSlider';
import ProductListDetail from './components/ProductListDetail';
import ProductList from './components/ProductList';
import MyWishlist from './components/MyWishlist';
import Category from './components/Category';
import RatingAndReview from './components/RatingAndReview';
import ViewAllReviews from './components/ViewAllReviews';
import ReviewAPartner from './components/ReviewAPartner';


export const routes = [
    {path: '/productslider', component: ProductSlider},
    {path: '/buyagain', component: BuyAgain},
    {path: '/partnerpincode', component: PartnerPincode},
    {path: '/productlist/detail', component: ProductListDetail},
    {path: '/productlist', component: ProductList},
    {path: '/mywishlist', component: MyWishlist},
    {path: '/category', component: Category},
    {path: '/ratingAndReview',component: RatingAndReview},
    {path:"/viewAllReviews",component: ViewAllReviews},
    {path:'/reviewAPartner',component:ReviewAPartner}
    {path:"/viewAllReviews",component: ViewAllReviews}
];
