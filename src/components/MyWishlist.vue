<template>
  <v-container class="pa-0">
    <v-card elevation="0" tile color="#fafafa" class="pb-0 font-weight-bold">
      <v-card-title
        >Your Wishlist
        <v-spacer></v-spacer>
        <a class="text-subtitle-2 text-decoration-underline orange--text"
          >Load more</a
        >
      </v-card-title>
      <v-divider></v-divider>
    </v-card>
    <div v-for="(product, index) in productData" v-bind:key="product.id">
      <v-card
        v-show="index < 2"
        class="py-4 my-0"
        elevation="0"
        tile
        color="#fafafa"
      >
        <v-btn
          class="ml-n2 white--text font-weight-regular"
          color="#fca219"
          elevation="0"
          depressed
          fab
          rounded
          absolute
          left
          >Rs {{ product.discountAmount }}<br />off</v-btn
        >
        <v-list-item three-line>
          <v-list-item-avatar size="110" tile>
            <v-img :src="product.product.imageAbsolutePath"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="ml-4">
            <div class="caption">{{ product.product.brandName }} PRESENTS</div>
            <v-row>
              <v-col cols-10>
                <h3 class="font-weight-bold mt-n4">
                  {{ product.product.identifier }}
                </h3>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-between mt-0 mx-a">
              <v-row>
                <v-col cols-6 align="left" class="pt-0">
                  <h4 class="font-weight-medium mr-auto price">
                    ₹ {{ product.price }}/-
                  </h4>
                </v-col>
                <v-col cols-6 align="right" class="pt-0">
                  <h4 class="font-weight-regular grey--text mx-a">
                    MRP:
                    <span
                      class="font-weight-medium red--text text-decoration-line-through ml-1"
                    >
                      {{ product.mrp }}</span
                    >
                  </h4>
                </v-col>
              </v-row>
            </div>
            <v-btn class="btn-cart" color="#fca219" outlined rounded
              >Add to Cart</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "MyWishlist",
  data() {
    return {
      productData: [],
    };
  },
  async mounted() {
    await axios
      .get("https://partnerpincode.herokuapp.com/apiv1/buyagain")
      .then((response) => {
        this.productData = response.data.detail.items.singleItems;
        console.log(response.data.detail.items.singleItems);
      });
  },
};
</script>

<style scoped>
.price {
  color: #fca219;
}
.btn-cart {
  width: 90%;
}
.btn-buy {
  width: 70%;
}
</style>
