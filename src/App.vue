<template>
  <v-app>
    <v-main>
      <ProductSlider/>
    </v-main>
  </v-app>
</template>

<script>
// import BuyAgain from './components/BuyAgain';
// import PartnerPincode from './components/PartnerPincode';
import ProductSlider from './components/ProductSlider';
// import Category from './components/My-Cart';
// import Category from './components/ProductDetails';
// import Category from './components/Profile-Page';


export default {
  name: 'App',

  components: {
    BuyAgain,
    PartnerPincode,
    ProductSlider
  },

  data: () => ({
    //
  }),
};
</script>
