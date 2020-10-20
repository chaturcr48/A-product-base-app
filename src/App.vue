<template>
  <v-app>
    <v-main>
      <cart/>
    </v-main>
  </v-app>
</template>

<script>
// import BuyAgain from './components/BuyAgain';
// import PartnerPincode from './components/PartnerPincode';
import cart from './components/cart';
// import Category from './components/My-Cart';
// import Category from './components/ProductDetails';
// import Category from './components/Profile-Page';


export default {
  name: 'App',

  components: {
    cart
  },

  data: () => ({
    //
  }),
};
</script>
