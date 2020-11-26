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
import OrderSummary from "./components/OrderSummary";
import Login from "./components/Login";
import ScreenShotShare from "./components/ScreenshotShare";
import MultipleShare from "./components/MultipleShare";
import MultipleProductsShare from "./components/MultipleProductsShare";
import Questions from "./components/QuestionAndAnswers/Questions";
import EmptyCart from "./components/EmptyCart";
import LoginForQuiz from "./components/QuestionAndAnswers/LoginScreen.vue";
import HomePageQuiz from "./components/HomePageQuiz.vue";

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
  {path:"/orderSummary",component:OrderSummary},
  {path:"/multipleshare",component:MultipleShare},
  { path: "/shareMultipleProducts", component: MultipleProductsShare },
  { path: "/QnAs_questions", component: Questions },
  { path: "/EmptyCart", component: EmptyCart },
  { path: "/loginForQuiz", component: LoginForQuiz },
  {path:"/homepagequiz",component:HomePageQuiz}
];
