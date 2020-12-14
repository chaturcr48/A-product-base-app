<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="" width="">
      <v-app-bar :color="color.purple" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-content class="subtitle-1 font-weight-bold">FRENDY</v-content>
        <v-spacer></v-spacer>

        <v-btn small color="#6a1b9a" v-on:click="partnerRoute(index)">
          SELECT PARTNER
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :color="color.purple"
        fixed
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-spacer></v-spacer>
              <img
                src="https://shop.frendy.in/img/logo.c17bae98.png"
                height="50"
                alt=""
              />
              <v-spacer></v-spacer>
            </v-list-item>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-avatar
                elevation="5"
                color="#963ACE"
                class="text-center align-center"
                size="75"
                @click="goToProfilePage"
              >
                <v-img src="@/assets/boy.png" contain height="60"></v-img>
              </v-avatar>
              <v-spacer></v-spacer>
            </v-list-item>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-content class="text-center white--text font-weight-bold">{{
                user.name
              }}</v-content>
              <v-spacer></v-spacer>
            </v-list-item>
            <v-divider color="#963ACE"></v-divider>
            <v-list-item
              v-for="(item, index) in appNavigation"
              :key="item.name"
              v-on:click="navigationRoute(index)"
            >
              <v-list-item-title
                class="pt-n4 pb-n4 white--text font-weight-light"
              >
                <v-list-item-avatar>
                  <v-icon size="25" :color="color.yellow">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-avatar>
                {{ item.name }}</v-list-item-title
              >
            </v-list-item>
            <v-divider :color="color.lightPurple"></v-divider>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div>
        <div>
          <BuyAgain></BuyAgain>
        </div>
        <div>
          <ProductSlider></ProductSlider>
        </div>
        <div>
          <MyWishlist></MyWishlist>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import BuyAgain from "./BuyAgain";
import MyWishlist from "./MyWishlist";
import ProductSlider from "./ProductSlider";
export default {
  components: {
    BuyAgain,
    ProductSlider,
    MyWishlist,
  },
  data: () => ({
    drawer: false,
    group: null,
    user: {
      name: "User",
      image: "@/assets/boy.png",
      isLoggedIn: "true",
    },
    loginBtnContent: "",
    color: {
      purple: "#6a1b9a",
      yellow: "#ffeb3b",
      lightPurple: "#963ACE",
    },
    appNavigation: [
      {
        name: "UI Updated",
        icon: "mdi-home-outline",
      },
      {
        name: "Categories",
        icon: "mdi-tshirt-crew-outline",
        route: "",
      },
      {
        name: "My Cart",
        icon: "mdi-cart",
      },
      {
        name: "Wishlist",
        icon: "mdi-heart-outline",
      },
      {
        name: "Search",
        icon: "mdi-magnify",
      },
      {
        name: "Product Request",
        icon: "mdi-near-me",
      },
      {
        name: "Contact Partner",
        icon: "mdi-phone",
      },
      {
        name: "Zip Form",
        icon: "mdi-mail",
      },
      {
        name: "Screenshot Share",
        icon: "mdi-fullscreen",
      },
      {
        name: "Order Summary",
        icon: "mdi-truck-delivery",
      },
      {
        name: "Multiple Product Share",
        icon: "mdi-share-variant",
      },
      {
        name: "Rate A Product",
        icon: "mdi-star-half",
      },
      {
        name: "Review A Partner",
        icon: "mdi-human-greeting",
      },
      {
        name: "Quiz",
        icon: "mdi-calendar-question",
      },
      {
        name: "Sign Out",
        icon: "mdi-login",
      },
      {
        name: "Share Creatives",
        icon: "mdi-share",
      },
      {
        name: "Visiting Card",
        icon: "mdi-home-outline",
      },
      {
        name: "Vue Tour",
        icon: "mdi-car",
      },
    ],
    routeIndex: [],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    navigationRoute(passedIndex) {
      console.log(passedIndex);
      this.routeIndex = this.appNavigation[passedIndex];
      console.log(this.routeIndex);
      if (passedIndex == 1) {
        this.$router.push("/category");
      } else if (passedIndex == 0) {
        this.$router.push("/searchResultsPage");
      } else if (passedIndex == 2) {
        this.$router.push("/emptyCart");
      } else if (passedIndex == 3) {
        this.$router.push("/mywishlist");
      } else if (passedIndex == 4) {
        this.$router.push("/searchpage");
      } else if (passedIndex == 5) {
        this.$router.push("/form");
      } else if (passedIndex == 6) {
        this.$router.push("/contactpartner");
      } else if (passedIndex == 7) {
        this.$router.push("/zipcode");
      } else if (passedIndex == 8) {
        this.$router.push("/screenshotShare");
      } else if (passedIndex == 9) {
        this.$router.push("/orderSummary");
      } else if (passedIndex == 10) {
        this.$router.push("/shareMultipleProducts");
      } else if (passedIndex == 11) {
        this.$router.push("/ratingAndReview");
      } else if (passedIndex == 12) {
        this.$router.push("/reviewAPartner");
      } else if (passedIndex == 13) {
        this.$router.push("/quiz");
      } else if (passedIndex == 15) {
        this.$router.push("/partnerAppCreatives");
      } else if (passedIndex == 16) {
        this.$router.push("/partnerAppCarousel");
      } else if (passedIndex == 17) {
        this.$router.push("/popUpTour");
      }
    },
    goToProfilePage() {
      this.$router.push("/profilePage");
    },
    partnerRoute() {
      this.$router.push("/partnerpincode");
    },
  },
};
</script>
