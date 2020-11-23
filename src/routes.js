import BuyAgain from "./components/BuyAgain";
import PartnerPincode from "./components/PartnerPincode";
import ProductSlider from "./components/ProductSlider";
import ProductListDetail from "./components/ProductListDetail";
import ProductList from "./components/ProductList";
import MyWishlist from "./components/MyWishlist";
import Category from "./components/Category";
import RatingAndReview from "./components/RatingAndReview";
import ViewAllReviews from "./components/ViewAllReviews";
import Form from "./components/Form";
import FormView from "./components/FormView";
import ProductDetails from "./components/ProductDetails";
import AppNavigation from "./components/AppNavigation";
import SearchPage from "./components/SearchPage";
import ContactPartner from "./components/ContactPartner";
import Zipcode from "./components/Zipcode";
import Login from "./components/Login";
import ScreenShotShare from "./components/ScreenshotShare";
import MultipleProductsShare from "./components/MultipleProductsShare";
import Questions from "./components/QuestionAndAnswers/Questions";

export const routes = [
  { path: "/", component: AppNavigation },
  { path: "/productslider", component: ProductSlider },
  { path: "/buyagain", component: BuyAgain },
  { path: "/partnerpincode", component: PartnerPincode },
  { path: "/productlist/detail", component: ProductListDetail },
  { path: "/productlist", component: ProductList },
  { path: "/mywishlist", component: MyWishlist },
  { path: "/category", component: Category },
  { path: "/ratingAndReview", component: RatingAndReview },
  { path: "/viewAllReviews", component: ViewAllReviews },
  { path: "/form", component: Form },
  { path: "/formview", component: FormView },
  { path: "/productdetails", component: ProductDetails },
  { path: "/searchpage", component: SearchPage },
  { path: "/contactpartner", component: ContactPartner },
  { path: "/zipcode", component: Zipcode },
  { path: "/login", component: Login },
  { path: "/screenshotShare", component: ScreenShotShare },
  { path: "/shareMultipleProducts", component: MultipleProductsShare },
  { path: "/QnAs_questions", component: Questions },
];
