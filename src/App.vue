<template>
  <v-app>
    <v-main>
      <Category/>
    </v-main>
  </v-app>
</template>

<script>
// import Category from './components/My-Cart';
// import Category from './components/ProductDetails';
// import Category from './components/HelloWorld';
// import Category from './components/Profile-Page';

import Category from './components/Category';

export default {
  name: 'App',

  components: {
    Category,
  },

  data: () => ({
    //
  }),
};
</script>
