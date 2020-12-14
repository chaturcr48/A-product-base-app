<template>
  <div>
    <v-content class="pb-0">
      <v-app-bar color="purple" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="pl-0">Frendy</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="purple px-1 py-1 partner">SELECT PARTNER </v-btn>
      </v-app-bar>
      <v-text-field required class="px-3 pb-0 mt-1" color="purple darken-2">
        <v-icon slot="append" color="purple">
          mdi-magnify
        </v-icon></v-text-field
      >
      <v-row class="mx-0">
        <v-overlay v-if="overlayBoolean" :opacity="0.7">
          <v-container>
            <v-card
              color="white"
              class="mx-auto"
              max-width="200"
              @click="showOverlay"
            >
              <v-img
                class="mx-auto"
                width="150px"
                :src="overlay.product.imageAbsolutePath"
              >
              </v-img>

              <v-card-title class="pb-0 pt-1 black--text">
                {{ overlay.product.identifier }}
              </v-card-title>

              <v-card-text class="text--primary">
                <div>
                  {{ overlay.productDescription }}
                </div>
              </v-card-text>
            </v-card>
          </v-container>
        </v-overlay>
        <v-col
          cols="6"
          class="pa-0"
          v-for="(product, index) in productData"
          :key="index"
        >
          <v-card class="mx-auto pa-2 pt-4 rounded-0" outlined>
            <v-img
              :src="product.product.imageAbsolutePath"
              height="150px"
              width="150px"
            ></v-img>
            <v-card-title class="pa-2 pb-0 mb-2">
              {{ product.product.identifier }}<v-spacer></v-spacer
              ><v-icon small>mdi-heart</v-icon>
            </v-card-title>

            <v-card-subtitle
              class="pa-2 text-caption font-weight-bold black--text"
            >
              ₹{{ product.price }}
              <span
                class="red--text text-decoration-line-through font-weight-light"
              >
                ₹{{ product.mrp }}</span
              >
              <v-chip class="ml-1 pa-1" color="green" x-small label outlined>
                ₹{{ product.discountAmount }}
              </v-chip>
            </v-card-subtitle>
            <v-card-actions class="pa-1">
              <v-btn
                class="white--text"
                elevation="2"
                rounded
                color="purple"
                small
                >Add +</v-btn
              >
              <v-chip class="ml-1" color="#F5F5F5" label small>
                {{ product.product.Attributes[0].ProductAttributeValue.value }}
              </v-chip>
              <v-spacer></v-spacer>

              <v-btn icon @click="showOverlay(index)" class="pr-0">
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-footer class="text-center white--text" app fixed padless>
        <v-row class="purple" dense>
          <v-col cols="3">
            <v-btn color="white" icon>
              <v-icon> mdi-alphabetical </v-icon>
            </v-btn>
            <h6>Frendy</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="white" icon class="search"
              ><v-icon> mdi-magnify </v-icon></v-btn
            >
            <h6>Search</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="white" icon>
              <v-icon> mdi-account-circle</v-icon></v-btn
            >
            <h6>Account</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="white" icon class="cart">
              <v-icon> mdi-cart </v-icon>
            </v-btn>
            <h6>Cart</h6>
          </v-col>
        </v-row>
      </v-footer>
      <v-tour name="myTour" :steps="steps"> </v-tour>
    </v-content>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SearchResultsPage",
  methods: {
    showOverlay(index) {
      this.overlayBoolean = !this.overlayBoolean;
      this.overlay = this.productData[index];
    },
  },
  async mounted() {
    await axios
      .get("https://partnerpincode.herokuapp.com/apiv1/buyagain")
      .then((response) => {
        this.productData = response.data.detail.items.singleItems;
        console.log(response.data.detail.items.singleItems);
        // this.productDataGreater = [this.prodcutData, this.productData];
        // console.log(this.productDataGreater);
      });
    this.$tours["myTour"].start();
  },
  data: () => ({
    overlayBoolean: false,
    overlay: "",
    productData: [],
    productDataGreater: "",
    steps: [
      {
        target: ".search", // We're using document.querySelector() under the hood
        content: `Search your favourite products !`,
        params: {
          placement: "top",
        },
      },
      {
        target: ".cart",
        content: "The products added to cart will be shown here :p ",
        params: {
          placement: "top",
        },
      },
      {
        target: ".partner",
        content: "You can select your delivery Partner from here",
      },
    ],
  }),
};
</script>
