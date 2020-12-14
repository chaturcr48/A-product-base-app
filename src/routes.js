import BuyAgain from "./components/BuyAgain";
import PartnerPincode from "./components/PartnerPincode";
import ProductSlider from "./components/ProductSlider";
import ProductListDetail from "./components/ProductListDetail";
import ProductList from "./components/ProductList";
import MyWishlist from "./components/MyWishlist";
import Category from "./components/Category";
import RatingAndReview from "./components/RatingAndReview";
import ViewAllReviews from "./components/ViewAllReviews";
import ReviewAPartner from "./components/ReviewAPartner";
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
import SearchResultsPage from "./components/SearchResultsPage";
import ProfilePage from "./components/Profile-Page";
import cart from "./components/cart";
import QuizHomePage from "./components/HomePageQuiz.vue";
// Nursery Routes
import PopUp from "./components/NurseryProject/PopUpTour";
import PartnerAppCarousel from "./components/NurseryProject/PartnerAppCarousel";
import PartnerAppCardScreenOne from "./components/NurseryProject/PartnerAppCardScreenOne";
import PartnerAppCardCreation from "./components/NurseryProject/PartnerAppCardCreation";
import PartnerAppCardGenerated from "./components/NurseryProject/PartnerAppCardGenerated";
import PartnerAppCreatives from "./components/NurseryProject/Creatives";
import CardChatur from "./components/NurseryProject/CardChatur";

export const routes = [
  { path: "/", component: AppNavigation },
  { path: "/cart", component: cart },
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
  { path: "/orderSummary", component: OrderSummary },
  { path: "/multipleshare", component: MultipleShare },
  { path: "/shareMultipleProducts", component: MultipleProductsShare },
  { path: "/QnAs_questions", component: Questions },
  { path: "/EmptyCart", component: EmptyCart },
  { path: "/loginForQuiz", component: LoginForQuiz },
  { path: "/SearchResultsPage", component: SearchResultsPage },
  { path: "/profilePage", component: ProfilePage },
  { path: "/reviewAPartner", component: ReviewAPartner },
  { path: "/quiz", component: QuizHomePage },
  { path: "/popUpTour", component: PopUp },
  { path: "/partnerAppCarousel", component: PartnerAppCarousel },
  { path: "/partnerAppCardScreen1", component: PartnerAppCardScreenOne },
  { path: "/partnerAppCardCreation", component: PartnerAppCardCreation },
  { path: "/partnerAppCardGenerated", component: PartnerAppCardGenerated },
  { path: "/partnerAppCreatives", component: PartnerAppCreatives },
  { path: "/CardChatur", component: CardChatur },
];
