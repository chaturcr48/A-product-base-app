import BuyAgain from './components/BuyAgain';
import PartnerPincode from './components/PartnerPincode';
import ProductSlider from './components/ProductSlider';
import RatingAndReview from './components/RatingAndReview';
import ViewAllReviews from './components/ViewAllReviews';
import ReviewAPartner from './components/ReviewAPartner';

export const routes = [
    {path: '/productslider', component: ProductSlider},
    {path: '/buyagain', component: BuyAgain},
    {path: '/partnerpincode', component: PartnerPincode},
    {path: '/ratingAndReview',component: RatingAndReview},
    {path:"/viewAllReviews",component: ViewAllReviews},
    {path:'/reviewAPartner',component:ReviewAPartner}
];
