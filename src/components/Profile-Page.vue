<template>
  <v-app>
    <v-content>
      <v-toolbar class="py-0">
        <v-icon class="align-left">mdi-chevron-left</v-icon>
        <h3 class="mx-auto py-0">Account</h3>
      </v-toolbar>
      <v-container class="text-center elevation-2 pb-0">
        <v-row dense>
          <v-col cols="12 py-1">
            <v-avatar>
              <v-btn fab>
                <v-img fab :src="require('../assets/logo.svg')" alt="Parth" />
              </v-btn>
            </v-avatar>
            <h4>Parth Amin</h4>
          </v-col>
          <v-col cols="4" class="pb-1" v-for="(buttons, index) in buttonsArray" :key="index">
            <v-btn small fab class="elevation-4">
              <v-icon>{{ buttons.iconName }}</v-icon>
            </v-btn>
            <h5 class="mt-3">{{ buttons.iconText }}</h5>
            <v-chip
              v-if="index===1"
              color="#E1BEE7"
              x-small
            >English
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="bg-me">
        <p class="py-0 mb-0 font-weight-bold  
                ">LAST ORDER</p>
          <v-card>
            <v-card-text class="pb-0" >
              <v-row class="v-card-text-me">
                <v-col cols="6 py-0">Order ID</v-col>
                <v-col cols="6 py-0 font-weight-bold black--text ">7HJD253W79DP</v-col>
                <v-col cols="6 py-0">Order Date</v-col>
                <v-col cols="4 py-0 font-weight-bold black--text ">22 July '20</v-col>
                <v-col cols="6 py-0">Order Total</v-col>
                <v-col cols="6 py-0 font-weight-bold black--text ">₹ 500</v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="py-1">
                <v-col cols="6" class="py-0 font-weight-bold purple--text">View Details</v-col>
                <v-spacer></v-spacer>
                <v-col cols="2" class="py-0">
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-col>
              </v-row>
            </v-card-text>
        </v-card>
      </v-container>
    </v-content>
        <v-footer class="text-center" fixed app padless elevation="6">
          <v-row class="white" dense>   
            <v-col cols="3">
              <v-btn color="black" icon>
                <v-icon> mdi-alphabetical </v-icon>
              </v-btn>
              <h6>Frendy</h6>
            </v-col>
            <v-col cols="3">
              <v-btn color="black" icon>
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
              <h6>Search</h6>
            </v-col>
            <v-col cols="3">
              <v-btn color="black" icon>
                <v-icon> mdi-account-circle</v-icon>
                </v-btn>
              <h6>Account</h6>
            </v-col>
            <v-col cols="3">
              <v-btn color="black" icon> 
                <v-icon> mdi-cart </v-icon> 
              </v-btn>
              <h6>Cart</h6>
            </v-col>
          </v-row>
        </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "ProfilePage",

  data: () => ({
    buttonsArray: [
      {
        iconName: "mdi-heart",
        iconText: "My Wish List",
      },
      {
        iconName: "mdi-earth",
        iconText: "Language",
      },
      {
        iconName: "mdi-account-circle-outline",
        iconText: "My Profile",
      },
      {
        iconName: "mdi-bell",
        iconText: "Notifications",
      },
      {
        iconName: "mdi-map-marker",
        iconText: "My Addresses",
      },
      {
        iconName: "mdi-cart",
        iconText: "My Cart",
      },
      {
        iconName: "mdi-help",
        iconText: "Help",
      },
    ],
  }),
};
</script>

<style scoped>
.bg-me{
  background-color: #eeeeee;
}
.v-card-text-me{
  background-color: white;
}