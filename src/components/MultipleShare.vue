<template>
  <v-container class="pa-0">
    <v-card elevation="0" tile color="#fff0da" class="pb-2">
      <v-card-title
        >Buy Again
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="black">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
    <v-card
      class="mt-n2"
      elevation="0"
      tile
      color="#fff0da"
      v-for="(product, index) in productData"
      v-bind:key="product.id"
    >
      <template v-if="index < 2" class="product">
        <v-btn
          class="ml-n2 white--text font-weight-regular"
          color="#fca219"
          elevation="0"
          depressed
          small
          fab
          rounded
          absolute
          left
          >Rs {{ product.discountAmount }}<br />off</v-btn
        >
        <v-list-item three-line>
          <v-list-item-avatar class="" size="100" tile>
            <v-img src="@/assets/basmatiRice.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="ml-4">
            <div class="caption">{{ product.product.brandName }} PRESENTS</div>
            <v-row>
              <v-col cols-10 md-10>
                <h3 class="font-weight-bold mt-n4" v-on:click="redirect()">
                  {{ product.product.identifier }}
                </h3>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-between mt-0 ml-auto mr-auto">
              <v-row>
                <v-col cols-6 md-6 lg-6 align="left">
                  <h4 class="font-weight-medium mr-auto price">
                    {{ product.price }}/-
                  </h4>
                </v-col>
                <v-col cols-6 md-6 lg-6 align="left">
                  <h4 class="font-weight-regular ml-auto mr-auto">
                    MRP:
                    <span
                      class="font-weight-medium red--text text-decoration-line-through ml-auto mr-auto"
                    >
                      {{ product.mrp }}</span
                    >
                  </h4>
                </v-col>
              </v-row>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions class="pb-6">
          <v-row>
            <v-col cols="4">
              <v-btn large class="btn-cart" color="#fca219" outlined rounded
                >Add to Cart</v-btn
              >
            </v-col>
            <v-col cols="4" offset="1" v-show="clicked">
              <v-btn
                large
                class="btn-cart"
                color="#fca219"
                outlined
                rounded
                @click="addToProductsList(index)"
                >Select Product</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </template>
    </v-card>
    <v-row>
      <v-col cols="4">
        <v-btn @click="shareMultipleProducts">{{
          numberOfProductsSelected > 0
            ? `Share ${numberOfProductsSelected} Products`
            : "Share Multiple Products"
        }}</v-btn>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="shareProductsList">
      <div class="sharedProductsList">
        <v-card
          class="py-4"
          elevation="0"
          tile
          color="#fff0da"
          v-for="product in MultipleProductsArray"
          v-bind:key="product.id"
        >
          <v-btn
            class="ml-n2 white--text font-weight-regular"
            color="#fca219"
            elevation="0"
            depressed
            small
            fab
            rounded
            absolute
            left
            >Rs {{ product.discountAmount }}<br />off</v-btn
          >
          <v-list-item three-line>
            <v-list-item-avatar class="" size="100" tile>
              <v-img src="@/assets/basmatiRice.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="ml-4">
              <div class="caption">
                {{ product.product.brandName }} PRESENTS
              </div>
              <v-row>
                <v-col cols-10 md-10>
                  <h3 class="font-weight-bold mt-n4" v-on:click="redirect()">
                    {{ product.product.identifier }}
                  </h3>
                </v-col>
              </v-row>
              <div class="d-flex justify-space-between mt-0 ml-auto mr-auto">
                <v-row>
                  <v-col cols-6 md-6 lg-6 align="left">
                    <h4 class="font-weight-medium mr-auto price">
                      {{ product.price }}/-
                    </h4>
                  </v-col>
                  <v-col cols-6 md-6 lg-6 align="left">
                    <h4 class="font-weight-regular ml-auto mr-auto">
                      MRP:
                      <span
                        class="font-weight-medium red--text text-decoration-line-through ml-auto mr-auto"
                      >
                        {{ product.mrp }}</span
                      >
                    </h4>
                  </v-col>
                </v-row>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
      <v-btn large @click="takeShot">
        <v-icon color="green">mdi-whatsapp</v-icon>
      </v-btn>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import axios from "axios";
import html2canvas from "html2canvas";
export default {
  name: "MultipleProductsShare",
  data() {
    return {
      productData: [],
      clicked: 0,
      numberOfProductsSelected: 0,
      MultipleProductsArray: [],
      shareProductsList: false,
      image: "",
    };
  },
  async mounted() {
    await axios
      .get("https://partnerpincode.herokuapp.com/apiv1/buyagain")
      .then((response) => {
        this.productData = response.data.detail.items.singleItems;
        console.log(this.productData);
      });
  },
  methods: {
    shareMultipleProducts() {
      this.clicked++;
    },
    addToProductsList(index) {
      console.log(this.productData[index]);
      this.MultipleProductsArray.push(this.productData[index]);
      this.numberOfProductsSelected++;
    },
    takeShot: async function() {
      let div = document.getElementsByClassName("sharedProductsList")[0];
      let ImageToUrl = await html2canvas(div);
      this.image = ImageToUrl.toDataURL("image/png").replace(
        "image/png",
        "image/octet-stream"
      );
    //   window.location.href = this.image;
      console.log(this.image);
      this.sendDetails();
    },
    takeScreenshot: async function() {
      axios.get("http://192.168.43.39:8000/sendMessage");
    },
    sendDetails:async function(){
        let detailsToSend={
            "0":{
                name:"Fortune Besan 1 Kg",
                price:"Rs 89"
            },
            "1":{
                name:"Rajgira Atta 500g",
                price:"49"
            }
        };
        let response=await axios.post("http://localhost:8000/sendDetails",{data:detailsToSend});
        console.log(response);
    }
  },
  watch: {
    clicked(value) {
      if (value === 2) {
        this.shareProductsList = true;
        this.numberOfProductsSelected = 0;
        this.clicked = 0;
      }
    },
  },
  created: async function() {
    this.takeShot();
  },
};
</script>