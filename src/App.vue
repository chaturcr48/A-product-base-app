<template>
  <v-app>
    <v-main>
      <PartnerPincode/>
      <ProductSlider/>
      <BuyAgain/>
    </v-main>
  </v-app>
</template>

<script>
import BuyAgain from './components/BuyAgain';
import PartnerPincode from './components/PartnerPincode';
import ProductSlider from './components/ProductSlider';

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
