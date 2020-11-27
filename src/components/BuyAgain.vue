<template>
    <v-container class="pa-0">
        <v-card elevation="0" tile color='#fff0da' class="pb-2">
            <v-card-title>Buy Again
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon color="black">mdi-dots-vertical</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
        <v-card class="mt-n2" elevation="0" tile color='#fff0da'
           v-for="(product, index) in productData" v-bind:key="product.id"> 
            <template v-if="index < 2" class="product">
            <v-btn class="ml-n2 white--text font-weight-regular" color="#fca219" elevation="0" depressed
                small fab rounded absolute left>Rs {{product.discountAmount}}<br/>off</v-btn>
            <v-list-item three-line>
                <v-list-item-avatar class="" size="100" tile>
                    <v-img v-bind:src="product.product.imageAbsolutePath"></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="ml-4">
                    <div class="caption">
                        {{product.product.brandName}} PRESENTS
                    </div>
                    <v-row>
                        <v-col cols-10 md-10>
                            <h3 class="font-weight-bold mt-n4" v-on:click="redirect()">
                                {{product.product.identifier}}
                            </h3>
                        </v-col>
                        <v-col align="right" cols-2 md-2 class="mt-n4">
                            <div>
                                <v-btn icon id="share"  @click="sheet = !sheet;" v-on:click="share(index)">
                                <v-icon medium >mdi-share-variant</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="d-flex justify-space-between mt-0 ml-auto mr-auto">
                        <v-row>
                            <v-col cols-6 md-6 lg-6 align="left">
                                <h4 class="font-weight-medium mr-auto price">{{product.price}}/-</h4>
                            </v-col>
                            <v-col  cols-6 md-6 lg-6 align="left">
                                <h4 class="font-weight-regular ml-auto mr-auto">MRP:
                                    <span class="font-weight-medium red--text text-decoration-line-through ml-auto mr-auto"> {{product.mrp}}</span>
                                </h4>
                            </v-col>
                        </v-row>
                    </div>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions class="mt-n4 pb-6">
                <v-row>
                    <v-col align="center">
                        <v-btn large class="btn-cart" color="#fca219" outlined rounded v-on:click="goToCart()">Add to Cart</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
            </template>
        </v-card>
        <v-bottom-sheet v-model="sheet">
            <v-sheet 
                class="text-center"
                height="180px"
            >
                <v-btn class="mt-6" text color="red">Share</v-btn>
                <div class="py-4" >
                    <v-row justify="space-around" align="center">
                        <ShareNetwork 
                            network="whatsapp"
                            url="https://shop.frendy.in"
                            :title="sharedProductName.identifier"
                            :description="sharedProductPrice.frendyPrice"
                        >
                            <v-btn icon>
                                <v-icon color="green" x-large>mdi-whatsapp</v-icon>
                            </v-btn><v-subheader>Whatsapp</v-subheader>
                        </ShareNetwork>

                        <ShareNetwork 
                            network="facebook"
                            url="https://shop.frendy.in"
                            :title="sharedProductName.identifier"
                            :description="sharedProductPrice.frendyPrice"
                        >
                            <v-btn icon>
                                <v-icon color="blue" x-large>mdi-facebook</v-icon>
                            </v-btn><v-subheader>Facebook</v-subheader>
                        </ShareNetwork>

                        <ShareNetwork 
                            network="twitter"
                            url="https://shop.frendy.in"
                            :title="sharedProductName.identifier"
                            :description="sharedProductPrice.frendyPrice"
                        >
                            <v-btn icon>
                                <v-icon color="blue" x-large>mdi-twitter</v-icon>
                            </v-btn><v-subheader>Twitter</v-subheader>
                        </ShareNetwork>

                        <ShareNetwork 
                            network="telegram"
                            url="https://shop.frendy.in"
                            :title="sharedProductName.identifier"
                            :description="sharedProductPrice.frendyPrice"
                        >
                            <v-btn icon>
                                <v-icon color="blue" x-large>mdi-telegram</v-icon>
                            </v-btn><v-subheader>Telegram</v-subheader>
                        </ShareNetwork>
                    </v-row>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </v-container>
</template>

<script>
import axios from 'axios';
// import html2canvas from "html2canvas";
export default {
    name: 'BuyAgain',
    data() {
        return{
            productData: [],
            sheet: false,
            sharedProductName: [],
            sharedProductPrice: [],
        }
    },
    async mounted() {
        await axios
        .get('https://partnerpincode.herokuapp.com/apiv1/buyagain')
        .then(response => {
            this.productData = response.data.detail.items.singleItems;
            console.log(response.data.detail.items.singleItems)
        });
    },
    methods: {
        share(shareProductIndex) {
            this.sharedProductName = this.productData[shareProductIndex].product;
            this.sharedProductPrice = this.productData[shareProductIndex].product.ProductPrices[0];
        },
        goToCart() {
        this.$router.push("/cart");
        },
        redirect(){
            this.$router.push('/productdetails')
        }
    }
}
</script>

<style scoped>
.price{
    color:#fca219;
}
.btn-cart{
    width:80%;
}
</style>