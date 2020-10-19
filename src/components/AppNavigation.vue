<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="600"
    width="344"
  >

    <v-app-bar
    :color="color.purple"
        
        dark
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-content 
        class="subtitle-1 font-weight-bold"
      >FRENDY</v-content>
      <v-spacer></v-spacer>

      <v-btn
        small
        color="#6a1b9a"
      >
        SELECT PARTNER
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    :color="color.purple"
      absolute
      
      temporary
    >
      <v-list
        nav
        dense


      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item>
          <v-spacer></v-spacer>
          <img src="https://shop.frendy.in/img/logo.c17bae98.png" height="50" alt="">
          <v-spacer></v-spacer>
        </v-list-item>
                <v-list-item>
                  <v-spacer></v-spacer>
                <v-avatar elevation="5" color="#963ACE" class="text-center align-center" size="75">
                <v-img 
                  src="@/assets/boy.png"
                    contain
                    height="60"
                ></v-img>
                </v-avatar>
                <v-spacer></v-spacer>
                </v-list-item>
                <v-list-item>
                  <v-spacer></v-spacer>
                  <v-content class="text-center white--text font-weight-bold">{{user.name}}</v-content>
                  <v-spacer></v-spacer>

                </v-list-item>
                <v-divider color="#963ACE"></v-divider>
          <v-list-item v-for="item in appNavigation" :key="item.name">
            <v-list-item-title 
              class="pt-n4 pb-n4 white--text font-weight-light"
            >
            <v-list-item-avatar>
              <v-icon size="25"
              :color="color.yellow">
                {{item.icon}}
            </v-icon>
      </v-list-item-avatar >
            {{ item.name }}</v-list-item-title>
          </v-list-item> 
          <v-divider :color="color.lightPurple"></v-divider>
 

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      user:{
        name:"Aniket",
        image:"@/assets/boy.png",
        isLoggedIn:'true'
      },
      loginBtnContent:"",
      color:{
        purple:"#6a1b9a",
        yellow:"#ffeb3b",
        lightPurple:"#963ACE"
      },
      appNavigation:[
        {
          name:"Home",
          icon:"mdi-home-outline"
        },
         {
          name:"Categories",
          icon:"mdi-tshirt-crew-outline"

        },
         {
          name:"FAQs",
          icon:"mdi-help-circle-outline"

        },
         {
          name:"Wishlist",
          icon:"mdi-heart-outline"

        },
         {
          name:"Search",
          icon:"mdi-magnify"
        },
         {
          name:"Sign Out",
          icon:"mdi-login"

        },
      ]
    }),

    watch: {
      group () {
        this.drawer = false
      },
  
    },
    methods:{

    }
  }
</script>

