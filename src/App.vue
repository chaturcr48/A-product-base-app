<template>
  <v-app>
    <v-main class="pb-0">
      <Header />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
 


export default {
  name: "App",

  components: {
    Header,
    
  },

  data: () => ({
    //
  }),
};
</script>
