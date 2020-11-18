<template>
  <div>

    
    <v-card 
        rounded="20" 
        elevation="0" 
        :color="color.lightPurple"
        class="product"
    >
              <v-card-title class="font-weight-bold text-subtitle-1"
                >{{ customer.customerName }}
              </v-card-title>
              <v-card-subtitle class="mt-n5 text-subtitle-2">
                {{ customer.customerPhoneNumber }}
              </v-card-subtitle>
                 <ShareNetwork 
                            network="whatsapp"
                            url="https://shop.frendy.in"
                            :title="customer.productName"
                            :description="customer.productSellingPrice"

                        >
              <v-img
                src="https://aniketcodes.s3.ap-south-1.amazonaws.com/whatsapp.png"
                height="35"
                width="35"
                class="float-right mr-2 mt-n15"
                @click="shareDetailsOnWhatsApp()"
              ></v-img>
                        </ShareNetwork>

              <v-card elevation="0" class="mx-auto" width="1180">
                <v-list-item three-line>
                  <v-list-item-avatar height="110" width="90" tile>
                    <v-img
                      src="@/assets/basmatiRice.jpg"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="ml-0">
                    <h3 class="mt-2 font-weight-regular grey--text">
                      {{ customer.productName }}
                    </h3>

                    <div class="d-flex justify-space-between mx-a">
                      <v-row>
                        <v-col cols-6 align="left" class="pt-0">
                          <h3 class="font-weight-medium mr-auto price">
                            ₹{{ customer.productSellingPrice }}
                            <span
                              class="font-weight-regular grey--text text-decoration-line-through ml-1"
                            >
                              ₹{{ customer.productCostPrice }}
                            </span>
                          </h3>
                        </v-col>
                      </v-row>
                    </div>
                    <v-row>
                      <v-col cols-6 align="left">
                        <v-chip
                          class="chip_size purple--text font-weight-bold"
                          color="purple lighten-4"
                          label
                        >
                          <div class="ml-n1">
                            Commission Price: ₹{{ customer.commission }}
                          </div>
                        </v-chip>
                      </v-col>
                      <v-col cols-6>
                        <div class="d-flex flex-row">
                          <v-btn
                            elevation="0"
                            color="purple darken-3"
                            width="5px"
                            height="30px"
                            x-small
                            dark
                          >
                            <v-icon>mdi-minus</v-icon>
                          </v-btn>
                          <v-chip
                            class="ml-1 mr-1"
                            color="grey lighten-2"
                            label
                          >1
                          </v-chip>
                          <v-btn
                            elevation="0"
                            color="purple darken-3"
                            width="5px"
                            height="30px"
                            x-small
                            dark
                          >
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <div>
                  <div>
                    <v-row>
                      <v-col cols-6>
                        <v-card-subtitle>Total Product</v-card-subtitle>
                      </v-col>
                      <v-col cols-6>
                        <v-card-subtitle align="end" class="mr-1 black--text"
                          >1</v-card-subtitle
                        >
                      </v-col>
                    </v-row>
                  </div>
                  <div class="mt-n8">
                    <v-row>
                      <v-col cols-6>
                        <v-card-subtitle>Total Price</v-card-subtitle>
                      </v-col>
                      <v-col cols-6>
                        <v-card-subtitle align="end" class="mr-1 black--text">{{
                          customer.totalPrice
                        }}</v-card-subtitle>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="mt-n8">
                    <v-row>
                      <v-col cols-6>
                        <v-card-subtitle>Commission Earned</v-card-subtitle>
                      </v-col>
                      <v-col cols-6>
                        <v-card-subtitle align="end" class="mr-1 black--text">{{
                          customer.commission
                        }}</v-card-subtitle>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-card>

    <!-- OUTPUT -->

  </div>
</template>
 
<script>
import axios from "axios";
import html2canvas from "html2canvas";
export default {
    name:"ScreenshotShare",
    data() {
    return {
        image:'',
        color: {
            lightPurple: "#f6e7fe",
            white: "#fefefe",
            grey: "#929292",
    },
    customer:
      {
        customerName: "Hitesh Patel",
        customerPhoneNumber: "+91 9876543210",
        totalPrice: "500",
        showDetails: false,
        productName: "Fortune Super Basmati Oil",
        productSellingPrice: "130",
        productCostPrice: "150",
        commission: "100",
      }
    }
    },
    methods: {
        takeShot: async function() { 
            let div=document.getElementsByClassName("product")[0];
            let ImageToUrl=await html2canvas(div);
            this.image=ImageToUrl.toDataURL("image/png").replace("image/png","image/octet-stream");
            window.location.href=this.image;
            // console.log(this.image);
        },
        shareDetailsOnWhatsApp:async function(){
            axios.get("http://localhost:8000/sendMessage");

        }

},
created:async function(){
    this.takeShot();
}

}
</script> 