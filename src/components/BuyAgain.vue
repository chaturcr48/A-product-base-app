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
            v-for="product in productData" v-bind:key="product.id">
            <v-btn class="ml-n2 white--text font-weight-regular" color="#fca219" elevation="0" depressed
                small fab rounded absolute left>Rs {{product.Discount}}<br/>off</v-btn>
            <v-list-item three-line>
                <v-list-item-avatar class="" size="100" tile>
                    <v-img v-bind:src="product.Image"></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="ml-4">
                    <div class="caption">
                        {{product.Company}} PRESENTS
                    </div>
                    <v-row>
                        <v-col cols-10 md-10>
                            <h3 class="font-weight-bold mt-n4">
                                {{product.Name}} - {{product.Quantity}}
                            </h3>
                        </v-col>
                        <v-col align="right" cols-2 md-2 class="mt-n4">
                            <v-btn icon>
                                <v-icon medium>mdi-share-variant</v-icon>
                            </v-btn>  
                        </v-col>
                    </v-row>

                    <div class="d-flex justify-space-between mt-0 ml-auto mr-auto">
                        <v-row>
                            <v-col cols-6 md-6 lg-6 align="left">
                                <h4 class="font-weight-medium mr-auto price">{{product.Price}}/-</h4>
                            </v-col>
                            <v-col  cols-6 md-6 lg-6 align="left">
                                <h4 class="font-weight-regular ml-auto mr-auto">MRP:
                                    <span class="font-weight-medium red--text text-decoration-line-through ml-auto mr-auto"> {{product.Mrp}}</span>
                                </h4>
                            </v-col>
                        </v-row>
                    </div>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions class="mt-n4 pb-6">
                <v-row>
                    <v-col cols-6 align="center">
                        <v-btn large color="#fca219" depressed rounded 
                            class="white--text btn-buy">Buy Now
                        </v-btn>
                    </v-col>
                    <v-col cols-6 align="center">
                        <v-btn large class="btn-cart" color="#fca219" outlined rounded>Add to Cart</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'BuyAgain',
    data() {
        return{
            productData: [{
                Name: "Aashirvaad multigrain Aata",
                Quantity: "5kg",
                Price: "450",
                Mrp: "460",
                Discount: "10",
                Company: "MULTIGRAINS" ,
                Image: "https://www.aashirvaad.com/images/packet-1.png"
            },
            {
                Name: "Aashirvaad multigrain Aata",
                Quantity: "5kg",
                Price: "450",
                Mrp: "460",
                Discount: "10",
                Company: "MULTIGRAINS",
                Image: "https://www.aashirvaad.com/images/packet-1.png"
            },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.price{
    color:#fca219;
}
.btn-cart{
    width:90%;
}
.btn-buy{
    width: 70%;
}
</style>