<template>
 <div class="mb-12">
    <v-system-bar dark color="deep-purple accent-4"  >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>


    <template>
       <v-conatiner color="purple darken-3">
            <v-app-bar absolute flat color="purple darken-3" dark>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title align="center">Categories</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>    
            </v-app-bar>
        
           <div  align="center" class="search_div mb-2">
            <v-text-field height="45" class="mt-6 search" v-model="search"  hide-details
                placeholder="Search products here..." outlined append-icon="mdi-microphone-outline mdi-magnify"></v-text-field>
           </div>
      </v-conatiner>
    </template>

    <v-divider></v-divider>

    <template>
     <v-expansion-panels 
      v-model="panel"
      :disabled="disabled"
      multiple
     >
      <v-expansion-panel 
        v-for="(item,i) in items"
        :key="i"
      >

       <v-expansion-panel-header>
          <v-row>
            <v-col cols="3">
              <v-avatar color="indigo" size="50">
                <v-img x-small fab :src="item.src"></v-img>
              </v-avatar>
            </v-col>

            <v-col cols="9">
               <h3 class="mt-1 mb-1">{{item.item}}</h3>
               <span>{{item.content}}</span>
            </v-col>

             
          </v-row> 
      </v-expansion-panel-header>
       
      <v-expansion-panel-content>
        <v-slide-group v-model="model" class="pa-0" center-active>
          <v-slide-item
            v-for="(singleitem,indexitem) in item.itemsarray"
           :key="indexitem"
          >
            <v-card color="" class="ma-1" height="100" width="100" @click="toggle">
              <v-img class="ml-4 mt-2" background-color="orange" height="70" width="70" :src="singleitem.src"></v-img>
              <p class="ml-5 mr-2">{{singleitem.description}}</p>
    
              
            </v-card>
            
          </v-slide-item>
       </v-slide-group>
     </v-expansion-panel-content>
    </v-expansion-panel>
   </v-expansion-panels>
 </template>



  <template>
    <v-footer class="text-center mt-12 mb-0 pb-0" darkgrey fixed padless> 

     <v-container>
      <v-row>
        <v-col cols="3"> 
        <v-btn icon> <v-icon> mdi-alphabetical </v-icon> </v-btn>
        <h6>Frendy</h6>
        </v-col>
        <v-col cols="3"> 
        <v-btn icon><v-icon> mdi-magnify </v-icon></v-btn>
        <h6>Search</h6>
        </v-col>
        <v-col cols="3"> 
        <v-btn icon> <v-icon> mdi-account-circle</v-icon></v-btn>
        <h6>Account</h6>
        </v-col>
        <v-col cols="3"> 
        <v-btn icon> <v-icon>  mdi-cart </v-icon> </v-btn>
        <h6>Cart</h6>
        </v-col>
     </v-row>
    </v-container>
    </v-footer>
  </template>
 
 </div>
</template>
 
 
 
 
 <script>
export default {
  name: "HelloWorld",
  data: () => ({

     panel: [0],
      disabled: false,

    items: [

        {
          item: 'Grocery & Staples',
          src: "https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg",
          content:'Food & Goods',
          itemsarray:[
            {
              description: "Item 1",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 2",
              src:"https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg"
            },
             {
              description: "Item 3",
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU"
            },
             {
              description: "Item 4",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 5",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
          ]
        },
        {
           item: 'Snacks & Foods',
           src: "https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg",
           content:'Food & Goods',
           itemsarray:[
            {
              description: "Item 1",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 2",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 3",
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU"
            },
             {
              description: "Item 4",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 5",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
          ]
        },
        {
           item: 'Personal Care',
           src: "https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg",
           content:'Food & Goods',
           itemsarray:[
            {
              description: "Item 1",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 2",
              src:"https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg"
            },
             {
              description: "Item 3",
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU"
            },
             {
              description: "Item 4",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 5",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
          ]
        },
        {
           item: 'Cleaning',
           src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU",
           content:'Food & Goods',
           itemsarray:[
            {
              description: "Item 1",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 2",
              src:"https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg"
            },
             {
              description: "Item 3",
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU"
            },
             {
              description: "Item 4",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 5",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
          ]
        },
        {
           item: 'Home Care',
           src: "https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg",
           content:'Food & Goods',
           itemsarray:[
            {
              description: "Item 1",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 2",
              src:"https://images-na.ssl-images-amazon.com/images/I/61W136BqY7L._SL1200_.jpg"
            },
             {
              description: "Item 3",
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ81olLtVbWLStQnTB5r3hsj5ab12jsJVqug&usqp=CAU"
            },
             {
              description: "Item 4",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
             {
              description: "Item 5",
              src:"https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
            },
          ]
        },
      ],
    
    }),
  };
</script>


<style>
.search_div{
    background-color: #6A1B9A;
    height:10%;
}
.search{
    width:90%; 
    background-color: white;
}
</style>