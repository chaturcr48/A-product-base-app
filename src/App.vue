<template>
  <v-app>
   

    <v-main>
      <OrderSummary/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Delivery from './components/Pincode-Aniket';
// import AppNavigation from './components/AppNavigation';
import OrderSummary from './components/OrderSummary';


export default {
  name: 'App',

  components: {
    // HelloWorld, 
    // Delivery,
    // AppNavigation,
    OrderSummary
  },

  data: () => ({
    //
  }),
};
</script>
