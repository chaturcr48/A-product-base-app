<template>
  <div>
    <v-app-bar color="purple" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">Frendy</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="purple px-1 py-1">SELECT PARTNER </v-btn>
    </v-app-bar>
  
    <v-row>
      <v-col
        cols="12"
        class="pa-0"
      >
        <v-card class="mx-auto pa-3 rounded-0" max-width="345" outlined 
          v-for="(product, index) in productsArray"
          :key="index" v-on:click="save($event, index)">
          <v-img
            :src="product.src"
            height="150px"
            max-width="150px"
            class="ml-2"
          ></v-img>

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

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="mb-12 footer-me"></div>
    <v-footer class="text-center white--text" fixed padless>
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
import axios from 'axios';

export default {
  name: "ProductList",

  data: () => ({
    productsArray: [],
  }),
    methods: {
      save() { 
          this.$router.push('/productlist/detail')
      }
  },
    created() {
        axios
        .get('https://api-oqcqf.run-ap-south1.goorm.io/api')
        .then(response => {
            this.productsArray = response.data;
        });
    }
};
</script>
