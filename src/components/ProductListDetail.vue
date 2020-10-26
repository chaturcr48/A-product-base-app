<template>
  <div>
    <v-app-bar color="purple" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">Frendy</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon v-on:click="back($event)">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="purple px-1 py-1">SELECT PARTNER </v-btn>
    </v-app-bar>
    <v-overlay v-if="overlay" :opacity="0.6">
      <v-container>
        <v-carousel
          class="color-me mx-auto"
          height="300"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(img, index) in imagesArray"
            :key="index"
            @click="imgClicked"
          >
            <v-img height="400" class="img" :src="img.src" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-overlay>
    <v-container class="mt-12 pb-0" v-else>
      <v-carousel height="300" hide-delimiter-background>
        <v-carousel-item
          v-for="(img, index) in imagesArray"
          :key="index"
          @click="imgClicked"
        >
          <v-img :src="img.src" class="img" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container :class="{'mt-12':overlay}">
      <p class="mb-0 grey--text">Generic</p>
      <p class="display-1 mb-0">
        Sugar
        <v-btn class="float-right wishlist-btn" fab x-small
          ><v-icon>mdi-heart</v-icon></v-btn
        >
      </p>
      <p>
        ₹84.00
        <span class="red--text text-decoration-line-through">₹112.00</span>
        <v-chip class="ml-1 pa-1" color="green" label outlined>
          ₹28 off
        </v-chip>
      </p>
      <div class="grey lighten-4 mt-3 mb-3 pa-2"></div>
      <v-chip class="ml-1" color="#6200ea" label outlined> 2 Kg </v-chip>
      <div class="grey lighten-4 mt-3 mb-3 pa-2"></div>
      <!-- aman  -->
      <v-row class="mb-4">
        <v-col>
          <h2 class="pl-6">Product Specification</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="left" justify="center" cols="6">
          <h4 class="pl-6">Category</h4>
        </v-col>
        <v-col cols="6">
          <h4>Sugar</h4>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mb-4">
        <v-col align="left" justify="center" cols="6">
          <h4 class="pl-6">Type</h4>
        </v-col>
        <v-col cols="6">
          <h4>Sugar</h4>
        </v-col>
      </v-row>
      <div class="grey lighten-4 mt-3 mb-3 pa-2"></div>
      <v-row class="mb-4">
        <v-col>
          <h2 class="pl-6">Product Description</h2>
        </v-col>
      </v-row>

      <p class="pl-6 mb-12">
        This Sugar Is Made From Fine Quality Sugar Cane; The Grains Are White In
        Colour. It Is A Fine Source Of Energy And Has Essential Minerals Without
        Any Additive.
      </p>
      <div class="mb-12 footer-me"></div>
      <v-footer class="text-center white--text" fixed padless>
        <v-btn block rounded dense dark color="purple" class="mb-2">
          <v-icon dark>Add +</v-icon>
        </v-btn>

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

      <!-- end of aman  -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      overlay: false,
      imagesArray: [
        {
          src: ("https://www.aashirvaad.com/images/packet-1.png"),
        },
        {
          src: ("https://www.aashirvaad.com/images/packet-1.png"),
        },
        {
          src: ("https://www.aashirvaad.com/images/packet-1.png"),
        },
      ],
    };
  },
  methods: {
    imgClicked() {
      this.overlay = !this.overlay;
    },
    back() {
        this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.color-me {
  width: 60%;
}
.footer-me {
  height: 8px;
}
.img {
  max-width: 100%;
}
</style>