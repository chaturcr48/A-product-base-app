<template>
  <div class="body-me">
    <v-app-bar color="white">
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-flex>
        <v-toolbar-title class="justify-center" align="center"
          >Search</v-toolbar-title
        >
      </v-flex>
    </v-app-bar>
    <v-content>
      <v-container>
        <div class="mt-3" justify="center" align="center">
          <p class="mb-0 grey--text text-caption">
            You are searching all the products that you want to purchase
          </p>
          <h5 class="mb-2 text-button">Enter your product name to search</h5>
        </div>
        <v-combobox
          outlined
          :items="items"
          append-icon="mdi-magnify"
          color="purple"
          background-color="white"
        >
          <template slot="append-item">
            <v-card justify="center" elevation="0">
              <v-card-subtitle class="grey lighten-4 py-0"
                >Trending Categories</v-card-subtitle
              >
              <v-card-text class="pb-0">
                <v-row
                  align="center"
                  class="mx-0 text-subtitle-1 font-weight-medium"
                  v-for="(trendingItem, index) in trendingItems"
                  :key="trendingItem"
                >
                  <p class="ma-0" @click="goToProducts(index)">
                    {{ trendingItem }}
                  </p>
                </v-row>
                <span class="purple--text">More..</span>
              </v-card-text></v-card
            >
          </template>
        </v-combobox>
      </v-container>
    </v-content>
    <v-footer class="text-center" app fixed padless elevation="6">
      <v-row class="white" dense>
        <v-col cols="3">
          <v-btn color="black" icon>
            <v-icon> mdi-alphabetical </v-icon>
          </v-btn>
          <h6>Frendy</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="black" icon><v-icon> mdi-magnify </v-icon></v-btn>
          <h6>Search</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="black" icon>
            <v-icon> mdi-account-circle</v-icon></v-btn
          >
          <h6>Account</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="black" icon> <v-icon> mdi-cart </v-icon> </v-btn>
          <h6>Cart</h6>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      items: ["Aata & Flour"],
      trendingItems: [
        "Grocery",
        "Food",
        "Beverages",
        "Cleaning and Home Care",
      ],
      index: "",
    };
  },
  methods: {
    sendIndex() {
      this.$root.$emit("showSpecificCategory", this.index);
      console.log("Emittting");
      // console.log(this.index);
    },
    goToProducts(index) {
      this.$router.push("/category");
      // console.log(index);
      this.index = index;
      this.sendIndex();
    },
  },
};
</script>

<style>
.body-me {
  background-color: #fafafa;
  height: 100vh;
}
.notranslate {
  transform: none !important;
}
.v-list-item__content {
  padding: 0;
}
.v-list {
  padding-top: 0px;
}
</style>
