<template color="grey lighten-2">
  <div> 
    <v-system-bar dark color="deep-purple accent-4"  >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
    
    <div  align="center" justify="center">
    <v-app-bar color="deep-purple accent-4" dark  >
     <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

     

      <v-toolbar-title class="mx-auto" align="center" justify="center" >My Cart</v-toolbar-title>
    </v-app-bar>
    </div>

    <div class="d-flex flex-column">
      <v-card
        class="pa-0"
        outlined
        tile
        justify="center"
        align="center" 
      >
      <v-row class="text-caption" justify="space-around">
        <caption>  <v-icon>mdi-map-marker </v-icon> Deliver to Parth - Ahemdabad 280105 </caption>  
        <p>CHANGE</p>
      </v-row>
      </v-card>
    </div>

    <div class="pt-4 pl-2">

     


    <template>
    <div>
    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h3>Dhamaka Combo</h3></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-divider width=100% ></v-divider>
          <v-divider></v-divider>
          <v-row class="mt-n1">
      <v-col cols="5">
       <v-img class="ml-2"
        src="https://www.jiomart.com/images/product/420x420/490000086/everest-shahi-biryani-masala-50-g-0-20200621.jpeg" height="70"
        width=30%
      ></v-img>  
      </v-col>
      <v-col cols="7">
        Fortune Basmati Rice 1kg <p>₹150 <span class="red--text text-decoration-line-through">₹170.00</span>
        <v-chip class="ml-1 pa-1" color="green" label outlined>
          12% off
        </v-chip></p>
      </v-col>      
     </v-row>


     <v-row class="mt-n4 mb-n8">
      <v-col cols="5">
       <v-img class="ml-2"
        src="https://www.jiomart.com/images/product/420x420/490000086/everest-shahi-biryani-masala-50-g-0-20200621.jpeg"
        height="70"
        width=30%
      ></v-img>  
      </v-col>
      <v-col cols="7">
        Shahi Biryani Masala 1kg <p>₹60 <span class="red--text text-decoration-line-through">₹70.00</span>
        <v-chip class="ml-1 pa-1" color="green" label outlined>
          12% off
        </v-chip></p>
      </v-col>      
     </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>


     <v-card justify="center" align="center" color="grey lighten-2" outlined dense
      height="50" elevation="3"
      width=97%>
       <v-row>
         <v-col cols="6">
         <span class="green--text">(Saving ₹30) </span>₹210
         </v-col>
         <v-col justify="space-around">

       <div>
          <span class="blue--text">Qty</span>
        <v-btn fab x-small
          class="mx-1"
          color="deep-purple accent-4"
          @click="messages++"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        {{messages}}
 
        <v-btn fab x-small
          class="mx-1"
          color="deep-purple accent-4"
          @click="messages--"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn fab x-small
        @click="messages = 0"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
       </div>
         </v-col>
       </v-row>

     </v-card>
    </div>
    
    <div class="pt-4 pl-2">
     <v-card
      outlined
      height="100"
      width=97%
      elevation="2"
      dense
    >
    <v-row>
      <v-col cols="5">
       <v-img class="ml-2"
        src="https://5.imimg.com/data5/NL/AU/MY-27708317/aashirvaad-chakki-atta-500x500.jpg"
        height="70"
        width=30%
      ></v-img>  
      </v-col>
      <v-col cols="7">
        Asshirvaad Chaki Atta   1kg <p>₹150 <span class="red--text text-decoration-line-through">₹112.00</span>
        <v-chip class="ml-1 pa-1" color="green" label outlined>
          ₹28 off
        </v-chip></p>
      </v-col>      
     </v-row>
     </v-card>
     <v-card justify="center" align="center" color="grey lighten-2" outlined dense
      height="50" elevation="3"
      width=97%>
       <v-row>
         <v-col cols="6">
           <!-- <v-btn class="float-right wishlist-btn" x-small fab -->
          <v-btn x-small fab>
          <v-icon>mdi-heart</v-icon>
          </v-btn> Save for later 
         </v-col>
         <v-col justify="space-around" cols="6">
           

       <div>
          <span class="blue--text">Qty</span>
        <v-btn fab x-small
          class="mx-1"
          color="deep-purple accent-4"
          @click="message++"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>

         {{message}}
 

        <v-btn fab x-small
          class="mx-1"
          color="deep-purple accent-4"
          @click="message--"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn fab x-small
        @click="message = 0"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
       </div>
         </v-col>
       </v-row>

     </v-card>
    </div>
    
    <div class="pt-3">
            <v-card dense class="ml-2 mb-12" height="230" elevation="3"
              width=95% >
               <v-row class="ml-3 mt-1"> 
                   <h3>Payment Information</h3> 
               </v-row>

               <v-row class="ml-5 mt-n1">
                 <v-col cols="9">
                   <p>Cart Total</p>
                 </v-col>
                 <v-col cols="3">
                   <p>₹640</p>
                 </v-col>
               </v-row>
               <v-row class="ml-5 mt-n7">
                 <v-col cols="9">
                   <p>Processing Fees</p>
                 </v-col>
                 <v-col cols="3">
                   <p>-₹10</p>
                 </v-col>
               </v-row>
               <v-row class="ml-5 mt-n7">
                 <v-col cols="9">
                   <p>Discount on processing fees</p>
                 </v-col>
                 <v-col cols="3">
                   <p>-₹30</p>
                 </v-col>
               </v-row>

               <v-divider class="mt-n3"></v-divider>
                <v-row class="ml-3 mt-1"> 
                   <v-col cols="9">
                     <h3>Payment Information</h3> 
                   </v-col>
                   <v-col cols="3">
                     <h3>₹540</h3>
                   </v-col>
                    
               </v-row>

               <v-row class="ml-5 mt-n4">
                 <v-col cols="9">
                   <p>Total Saving</p>
                 </v-col>
                 <v-col cols="3">
                   <p>-₹90</p>
                 </v-col>
               </v-row>
            </v-card>
    </div>

    <div class="mb-0 footer-me">
       <v-footer class="text-center white--text"  padless>
         <v-row class="deep-purple accent-4" dense>
           <v-col cols="6" >
             <p>Total Payable: <span><h3>₹540</h3></span> </p>
           </v-col>
           <v-col cols="6">
             <v-btn class="mt-2"
              color="warning"
              dark
            >
              PLACE ORDER
            </v-btn>
           </v-col>
         </v-row>
      </v-footer>
    </div>

   </div>
</template>

 <script>
export default {
  name: "Testing",
  data: () => ({

          panel: [0],
      disabled: false,
      readonly: false,




         messages:0,
         message:0,
    }),
  };
</script>