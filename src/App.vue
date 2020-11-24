<template>
  <v-app>
    <v-main>
      <BuyAgain />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import BuyAgain from "./components/BuyAgain";

export default {
  name: "App",

  components: {
    BuyAgain,
  },

  data: () => ({
    //
  }),
};
</script>
