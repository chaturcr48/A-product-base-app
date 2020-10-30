<template>
  <v-app>
    <v-main>
      <Header/>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>



<script>
import Header from "./components/Header";
// import ProductDetails from "./components/ProductDetails";
// import ProfilePage from "./components/Profile-Page";
// import MyWishlist from "./components/MyWishlist";
// import SearchResultsPage from "./components/SearchResultsPage";
// import SearchPage from "./components/SearchPage";

export default {
  name: "App",

  components: {
    Header,
    // ProductDetails,
    // ProfilePage,
    // MyWishlist,
    // SearchResultsPage,
    // SearchPage,
  },

  data: () => ({
    //
  }),
  
}
</script>
