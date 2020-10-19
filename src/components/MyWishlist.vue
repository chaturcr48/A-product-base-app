<template>
  <v-container class="bg-me">
    <v-row>
      <v-col cols="6" class="py-0">
        <span class="font-weight-bold mr-2">Your Wishlist</span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="text-right py-0 ">
        <a class="orange--text">Load more</a>
      </v-col>
    </v-row>
    <div v-for="(img, index) in imagesArray" :key="index">
      <v-row>
        <v-col cols="5" class="mt-0">
          <v-btn absolute fab color="orange">
            <span class="text-caption font-weight-bold">
              Rs {{ img.off }} <br />
              off</span
            >
          </v-btn>
          <div>
            <v-img :src="img.src" height="100" class="mt-2"> </v-img>
          </div>
        </v-col>
        <v-col cols="7" class="mt-1">
          <p class="grey--text pb-0 mb-0 text-caption">
            {{ img.brandName }} PRESENT
          </p>
          <p class="mb-1 font-weight-bold">{{ img.productName }}</p>
          <v-row>
            <v-col cols="4" class="pa-0 pl-3">
              <span
                class="orange--text pa-0 text-subtitle-2 font-weight-bold mb-0"
                >Rs {{ img.frendyPrice }}/-</span
              >
            </v-col>
            <v-col cols="8" class="text-right pa-0 pr-3">
              <span
                class="pa-0 text-subtitle-2 font-weight-regular grey--text mb-0"
                >MRP:
                <span class="red--text text-decoration-line-through"
                  >₹{{ img.originalPrice }}</span
                ></span
              >
            </v-col>
          </v-row>
          <v-btn outlined block rounded color="orange" class="mt-4"
            >Add to Cart</v-btn
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyWishlist",
  data() {
    return {
      imagesArray: [
        {
          src: require("../assets/productImages/3.jpg"),
          brandName: "BB ROYAL",
          productName: "Wheet Flour( 2 Kg )",
          frendyPrice: 79,
          originalPrice: 82,
          off: 3,
        },
        {
          src: require("../assets/productImages/2.jpg"),
          brandName: "RASOI",
          productName: "Pulses ( 3 Kg )",
          frendyPrice: 247,
          originalPrice: 255,
          off: 4,
        },
        {
          src: require("../assets/productImages/3.jpg"),
          brandName: "BB ROYAL",
          productName: "Wheet Flour( 2 Kg )",
          frendyPrice: 79,
          originalPrice: 82,
          off: 3,
        },
        {
          src: require("../assets/productImages/2.jpg"),
          brandName: "RASOI",
          productName: "Pulses ( 3 Kg )",
          frendyPrice: 247,
          originalPrice: 255,
          off: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-me {
  background-color: #fafafa;
}
</style>
