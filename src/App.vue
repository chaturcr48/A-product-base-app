<template>
  <v-app>
    <v-main>
      <AppNavigation/>
    </v-main>
  </v-app>
</template>

<script>
// import Header from './components/Header';
// import OrderSummary from './components/OrderSummary';
import AppNavigation from './components/AppNavigation';

// import ReviewAndRating from './components/ReviewAndRating';



export default {
  name: 'App',

  components: {
    // Header,
    // OrderSummary
    AppNavigation
    // ReviewAndRating
  },

  data: () => ({
    //
  }),
};
</script>
