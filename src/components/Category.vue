<template>
  <div>
    <template>
      <v-app-bar absolute flat color="purple darken-3" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title align="center">Categories</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon v-on:click="goToCart()">mdi-cart</v-icon>
        </v-btn>
      </v-app-bar>
      <div align="center" class="search_div mt-n4">
        <v-text-field
          height="40"
          class="mt-6 search"
          hide-details
          placeholder="Search products here..."
          outlined
          append-icon="mdi-microphone-outline mdi-magnify"
        ></v-text-field>
      </div>
    </template>
    <v-divider></v-divider>
    <template>
      <div class="pb-12 pt-0">
        <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel v-for="item in list" :key="item.id">
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="3">
                  <v-avatar size="50">
                    <v-img
                      x-small
                      fab
                      :src="item.thumbnailImageAbsolutePath"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="9">
                  <h3 class="mt-1 mb-1">
                    {{ item.CategoryLangDatas[0].name }}
                  </h3>
                  <span
                    class="d-inline-block text-truncate"
                    style="max-width: 200px;"
                  >
                    {{ item.SubCategories[0].identifier }},{{
                      item.SubCategories[1].identifier
                    }},{{ item.SubCategories[2].identifier }}
                  </span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-slide-group class="pa-0" center-active>
                <v-slide-item
                  v-for="SubCategories in item.SubCategories"
                  v-bind:key="SubCategories.id"
                  class="d-inline-block"
                >
                  <v-card class="ma-1" height="100" width="100">
                    <v-img
                      class="ml-4 mt-2"
                      background-color="orange"
                      height="70"
                      width="70"
                    ></v-img>
                    <p
                      align="center"
                      justify="center"
                      class=" text-truncate caption mt-n1 ml-1 mr-1"
                    >
                      {{ SubCategories.identifier }}
                    </p>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Category",
  data() {
    return {
      panel: [0],
      disabled: false,
      list: [],
      panelDynamic: "",
    };
  },
  created() {
    axios
      .get("https://afternoon-plains-76982.herokuapp.com/category")
      .then((res) => {
        this.list = res.data.Categories;
        // console.log(res.data.Categories);
      });
  },
  mounted() {
    this.fromSearchPage();
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    fromSearchPage() {
      this.$root.$on("showSpecificCategory", (index) => {
        console.log("Receiving");
        console.log("Am I getting Called ?");
        if (index) {
          this.panelDynamic = index;
          console.log(index);
          this.panel = [];
          this.panel.push(this.panelDynamic);
          
        } else {
          console.log("No idea !");
        }
      });
      if (this.panelDynamic == "") {
        this.panel = [];
        this.panel.push(0);
      } else {
        this.panel = [];
        this.panel.push(this.panelDynamic);
      }
    },
  },
};
</script>

<style>
.search_div {
  background-color: #6a1b9a;
  height: 10%;
}
.search {
  width: 90%;
  background-color: white;
}
</style>
