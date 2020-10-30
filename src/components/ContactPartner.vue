<template>
    <v-container >
        <v-card class="con-b">
            <v-row class="row-b mx-auto">
                <v-card-title class="font-weight-regular mt-2 body-1 mr-auto ml-auto">
                    Partner Name: {{partnerData.firstName}} {{partnerData.lastName}}
                </v-card-title>
            </v-row>
            <v-row class="mt-n2 mx-auto">
                <v-card-title class="font-weight-regular body-1">
                    <span class="row-b"><v-icon color="yellow" class="mr-2">mdi-phone</v-icon>Mobile no: 
                        <a class="mobile" :href="`tel:+91${ partnerData.mobile }`">+91 {{partnerData.mobile}}</a></span>
                </v-card-title>
            </v-row>
            <v-row class="row-b mt-n2 mx-auto">
                 <v-card-title class="font-weight-regular body-1 mb-2">
                    <span class="row-b"><v-icon color="yellow" class="mr-2">mdi-google-maps</v-icon>Address: {{partnerData.address}}</span>
                </v-card-title>
            </v-row>
            <!-- <v-row class="row-b last-row mt-4"> <span><em>You can also contact us on</em></span> 
                <v-btn color="white" icon>
                <v-icon> mdi-facebook <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
                </v-btn>
                <v-btn color="white" icon>
                <v-icon> mdi-twitter <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
                </v-btn>
                <v-btn color="white" icon>
                <v-icon> mdi-email <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
                </v-btn>
            </v-row> -->
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Contact',
    data() {
        return{
            partnerData: []
        }
    },
    async mounted() {
        await axios
        .get('https://partnerpincode.herokuapp.com/apiv1/buyagain')
        .then(response => {
            this.partnerData = response.data.detail.captainInfo;
            console.log(response.data.detail.captainInfo)
        });
    },
}
</script>

<style scoped>
.con-b{
    background-color: #6a1b9a;

}
.row-b{
    color: white;
}
span{
    color: rgba(255, 255, 255, 0.438);
    font-size: 14px;
    padding-top: 7px;
}
.last-row{
    margin-top: 80px;
    text-align: center;
    justify-content: center;
}
.mobile{
    text-decoration: none !important;
}
</style>