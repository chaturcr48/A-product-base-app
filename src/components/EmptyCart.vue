<template>
  <div>
    <div align="center" justify="center">
      <v-app-bar color="deep-purple accent-4" dark>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="mx-auto" align="center" justify="center"
          >My Cart</v-toolbar-title
        >
      </v-app-bar>
    </div>
    <v-container class="text-center">
      <v-row>
        <v-col cols="8" class="mt-4" offset="2">
          <v-img src="../assets/ECwhite.png"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="mt-6" offset="2">
          <h4>{{ emptyCartData.tagline }}</h4>
          <p class="grey--text text-caption">
            {{ emptyCartData.multipleLines }}
          </p>
          <v-btn color="purple" class="white--text mt-1" block>
            <v-icon small class="pr-2 pt-1">mdi-heart</v-icon>
            <span class="pt-1">{{ emptyCartData.btnOne }}</span></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "EmptyCart",
  data() {
    return {
      emptyCartData: {
        img: "../assets/EC2.png",
        tagline: "Your Cart feels so light :(",
        multipleLines:
          "sajdbasbhdas asjchvscvas ,mc jvshcas,hca vsc ajchv,sc vascsacjhscvasv",
        btnOne: "Go to Wishlist",
      },
    };
  },
};
</script>
