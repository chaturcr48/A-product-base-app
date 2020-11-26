<template>
  <div>
    <v-content>
      <div align="center" justify="center">
        <v-app-bar color="purple" dark>
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
    </v-content>
    <v-footer class="text-center white--text" app fixed padless>
      <v-row class="purple" dense>
        <v-col cols="3">
          <v-btn color="white" icon>
            <v-icon> mdi-alphabetical </v-icon>
          </v-btn>
          <h6>Frendy</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon><v-icon> mdi-magnify </v-icon></v-btn>
          <h6>Search</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon>
            <v-icon> mdi-account-circle</v-icon></v-btn
          >
          <h6>Account</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon> <v-icon> mdi-cart </v-icon> </v-btn>
          <h6>Cart</h6>
        </v-col>
      </v-row>
    </v-footer>
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
          "Hit the wishlist button and let's buy your favourite products !",
        btnOne: "Go to Wishlist",
      },
    };
  },
};
</script>
