<template>
  
    <v-sheet class="mx-auto" elevation="8" max-width="1185">
      <div class="pl-4 pt-4">
        <v-row>
          <v-col cols-6 md-6 align="start" justify="start">
            <h3 class="font-weight-regular">Popular Products</h3>
          </v-col>
          <v-col cols-6 md-6 align="end" justify="end" class="mr-6 mt-n1">
            <v-btn width="100" text class="font-weight-light blue--text">View More</v-btn>
          </v-col>
        </v-row>
      </div>
      
      <v-slide-group class="pt-4 pb-4" center-active show-arrows>
        <v-slide-item v-for="product in productData" v-bind:key="product.id" v-slot:default="{toggle}">
          
          <v-card @click="toggle" class="mx-auto rounded-2 card-outter"
            max-width="100" max-height="400" outlined>

            <v-btn class="ml-n4 white--text caption text-lowercase" color="green accent-4" elevation="0" depressed
              width="28" height="28" x-small fab rounded absolute left>₹{{product.Variations[0].ProductPrices[0].discount}}<br/>off</v-btn>
            <div align="center">
              <v-img v-bind:src="product.imageAbsolutePath" height="100px" max-width="90px"></v-img>
            </div>

            <h4 class="pa-1 font-weight-light text-truncate">
                {{product.ProductDetailInLanguages[0].name}}
            </h4>
            <h5 align="center" class="mt-n2 pb-14 mb-6 font-weight-light">
              ({{product.Variations[0].Attributes[0].ProductAttributeValue.value}})
            </h5>
             
            <v-row class="card-actions">
              <v-row align="center" justify="center" class="ml-auto mr-auto">
                <v-card-subtitle class="pl-2 text-caption font-weight-bold black--text">
                    ₹{{product.Variations[0].ProductPrices[0].frendyPrice}}
                  <span class="red--text text-decoration-line-through font-weight-light">₹{{product.Variations[0].ProductPrices[0].mrp}}</span>
                </v-card-subtitle>
              </v-row>

              <v-row align="center" justify="center" class="mt-n2 ml-auto mr-auto">
                <v-card-actions>
                  <v-btn class="white--text" elevation="2" rounded color="purple" small>Add +</v-btn>
                </v-card-actions>
              </v-row>            
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
</template>


<script>
import axios from 'axios';
export default {
    name: 'ProductSlider',
    data() {
        return{
          productData: [],
        }
    },
    created() {
        axios
        .get('https://partnerpincode.herokuapp.com/apiv1/slider')
        .then(response => {
            this.productData = response.data.productDefinitions;
            console.log(response.data.productDefinitions)
        });
    },
    methods: {

    }
}
</script>

<style>
.card-outter {
  position: relative;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
.v-slide-group__next, .v-slide-group__prev {
    align-items: center;
    display: flex;
    flex: 31px !important;
    justify-content: center;
    min-width: 31px !important;
}
</style>