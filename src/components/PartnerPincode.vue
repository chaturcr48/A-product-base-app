<template>
    <div>
        <v-app-bar flat color="white">
            <v-btn icon v-on:click="back()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-flex>
                <v-toolbar-title align="center">Choose Delivery Type</v-toolbar-title>
            </v-flex>
        </v-app-bar>
        <hr color="#f1f1f1" style="height: 10px;">
        
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <h3 class="ml-3">Your Delivery pincode</h3>

                    <v-col cols="12" md="12">
                            <v-text-field  v-model="pincode"
                                placeholder="Pincode"
                                prepend-inner-icon=mdi-map-marker
                                outlined
                                required>
                                <v-btn @click="submitPin"
                                    class="white--text mb-4"
                                    slot="append" 
                                    color="#782175">
                                    Submit
                                </v-btn>
                            </v-text-field>
                    </v-col>
                </v-col>
            </v-row>
            <div class="header">
                <h4 class="modes">Available mode of delivery</h4>
            </div>
            <div>
                <v-row align="center" justify="start" class="mt-4">
                    <v-icon color="#782175" class="ml-6" large>mdi-home-map-marker</v-icon>
                    <h4 class="ml-0">Frendy Partners Pickup</h4>
                    <v-row align="center" justify="end">
                        
                        <h4 class="mr-6"><v-btn width="100" class="learn" text>LEARN MORE</v-btn></h4>
                    </v-row>
                </v-row>
                <v-row align="center" justify="start" class="mt-2">
                    <p class="ml-8 font-weight-light subtitle grey--text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                </v-row>
            </div>
          
            <div v-if="partnerData!='No Partner Found'" class="mt-4"  >
                <v-card outlined v-for="partner in partnerData" :key="partner.id">
                    <v-card-title>{{ partner.Name }}
                        <v-row align="center" justify="end">
                            <v-icon class="ml-12 mr-1" color="#FFD700" small>
                                mdi-star
                            </v-icon>
                            <span class="caption mr-12">{{ partner.Rating }}</span>
                        </v-row>
                    </v-card-title>
                    <v-row align="center" justify="end">
                            <h5 class="mr-12 mt-n8">{{ partner.Distance }} km away</h5>
                    </v-row>

                    <v-card-subtitle class="mt-n8" >{{ partner.Address}}
                    </v-card-subtitle>
                    <v-card-actions class="mb-4">
                        <v-btn class="white--text" large color="#782175">Select</v-btn>
                    </v-card-actions>
                </v-card>
            </div>

            <div v-else>
                <v-card class="" height="100%">
                    <p align="center" class=" red white--text pt-3 pb-3"
                        elevation="0"
                    >No partner Found</p>
                </v-card>
             </div>

            <div class="footer">
            </div>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
  export default {
      name: 'PartnerPincodeSearch',
      
    data: () => ({
       pincode:'',
       partnerData:[],
       notFound:[]
    }),
    methods:{
        back(){
            this.$router.back(-1);
        },
        async submitPin(){
            let data= await axios
                .get(`https://partnerpincode.herokuapp.com/api/${this.pincode}`)
                .then(function(response){
                    if(response.data==0){
                        var notFound = 'No Partner Found'
                        return notFound;
                    } else {
                         return response.data;
                    }
                });
        this.partnerData=data;
        console.log(data)
        }
    }
}
</script>

<style>
.header{
    height:50px; background-color:#f1f1f1; margin-top:-30px;
}
.modes{
    color:#782175; padding-top:20px; padding-left: 15px;
}
.footer{
    height:50px; background-color:#f1f1f1; margin-top:30px;
}
.learn{
    color:#782175 !important;
}
.info{
    font-size:15px;
}
</style>