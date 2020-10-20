<template
  ><div class="body-me">
    <v-app-bar color="white">
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-flex>
        <v-toolbar-title class="justify-center" align="center"
          >Search</v-toolbar-title
        >
      </v-flex>
    </v-app-bar>
    <v-container>
      <div class="mt-3" justify="center" align="center">
        <p class="mb-0 grey--text text-caption">
          You are searching all the products that you want to purchase
        </p>
        <h5 class="mb-2 text-button">Enter your product name to search</h5>
      </div>
      <v-combobox
        outlined
        :items="items"
        append-icon="mdi-magnify"
        color="purple"
        background-color="white"
      >
        <template slot="append-item" slot-scope="data">
          <v-icon>mdi-home</v-icon> {{ data.item }}
        </template>
      </v-combobox>
      <v-footer class="text-center" fixed padless elevation="6">
        <v-row class="white" dense>
          <v-col cols="3">
            <v-btn color="black" icon>
              <v-icon> mdi-alphabetical </v-icon>
            </v-btn>
            <h6>Frendy</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="black" icon><v-icon> mdi-magnify </v-icon></v-btn>
            <h6>Search</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="black" icon>
              <v-icon> mdi-account-circle</v-icon></v-btn
            >
            <h6>Account</h6>
          </v-col>
          <v-col cols="3">
            <v-btn color="black" icon> <v-icon> mdi-cart </v-icon> </v-btn>
            <h6>Cart</h6>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      items: ["Aata & Flour", "Noodles", "Groceries", "Health Care"],
    };
  },
};
</script>

<style>
.body-me {
  background-color: #fafafa;
  height: 100vh;
}
.notranslate {
  transform: none !important;
}
</style>
