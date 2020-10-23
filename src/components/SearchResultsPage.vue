<template>
  <div>
    <v-content class="pb-12 mb-3">
      <v-app-bar color="purple" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="pl-0">Frendy</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="purple px-1 py-1">SELECT PARTNER </v-btn>
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
              <v-img class="mx-auto" width="150px" :src="overlay.src"> </v-img>

              <v-card-title class="pb-0 pt-1 black--text">
                {{ overlay.productTitle }}
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
          v-for="(product, index) in productsArray"
          :key="index"
        >
          <v-card class="mx-auto pa-2 pt-4 rounded-0" outlined>
            <v-img :src="product.src" height="150px" width="150px"></v-img>
            <v-card-title class="pa-2 pb-0 mb-2">
              {{ product.productTitle }}<v-spacer></v-spacer
              ><v-icon small>mdi-heart</v-icon>
            </v-card-title>

            <v-card-subtitle
              class="pa-2 text-caption font-weight-bold black--text"
            >
              ₹{{ product.frendyPrice }}
              <span
                class="red--text text-decoration-line-through font-weight-light"
              >
                ₹{{ product.originalPrice }}</span
              >
              <v-chip class="ml-1 pa-1" color="green" x-small label outlined>
                ₹{{ product.off }}
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
                {{ product.productVolume }}
              </v-chip>
              <v-spacer></v-spacer>

              <v-btn icon @click="showOverlay(index)" class="pr-0">
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
  name: "SearchResultsPage",
  methods: {
    showOverlay(index) {
      this.overlayBoolean = !this.overlayBoolean;
      this.overlay = this.productsArray[index];
    },
  },
  data: () => ({
    overlayBoolean: false,
    overlay: "",
    productsArray: [
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Maida 1 Kg",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 84,
        originalPrice: 112,
        off: 28,
        productVolume: "2 Kg",
      },
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Soja 500gm",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 20,
        originalPrice: 35,
        off: 15,
        productVolume: "500gm",
      },
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Tata Salt 1 Kg",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 18,
        originalPrice: 20,
        off: 2,
        productVolume: "500 gm",
      },
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Besan 1 Kg",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 75,
        originalPrice: 150,
        off: 75,
        productVolume: "1 Kg",
      },
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Soja 500gm",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 20,
        originalPrice: 35,
        off: 15,
        productVolume: "500gm",
      },
      {
        src: "https://www.aashirvaad.com/images/packet-1.png",
        productTitle: "Maida 1 Kg",
        productDescription:
          "Processed from the best quality chana dal Absolutely untouched by hands to maintain 100 percent hygiene Advanced grinding process retains the aroma",
        frendyPrice: 84,
        originalPrice: 112,
        off: 28,
        productVolume: "2 Kg",
      },
    ],
  }),
};
</script>
