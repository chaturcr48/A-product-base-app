<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold pl-4">
          Creatives Settings
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="8" class="pa-1 pb-0 font-weight-bold"
              >Want your Name on Card?</v-col
            >
            <v-col cols="4" class="pa-1 pb-0">
              <v-switch
                v-model="showPartnerName"
                inset
                style="display:inline"
                color="purple"
              ></v-switch>
            </v-col>
            <v-col cols="8" class="pa-1 pb-0 font-weight-bold"
              >Want your Number on Card?</v-col
            >
            <v-col cols="4" class="pa-1 pb-0">
              <v-switch
                v-model="showPartnerNumber"
                inset
                style="display:inline"
                color="purple"
              ></v-switch>
            </v-col>
            <v-col cols="8" class="pa-1 pb-0 font-weight-bold"
              >Want your Address on Card?</v-col
            >
            <v-col cols="4" class="pa-1 pb-0">
              <v-switch
                v-model="showPartnerAddress"
                inset
                style="display:inline"
                color="purple"
              ></v-switch>
            </v-col>
            <v-col cols="8" class="pa-1 pb-0 font-weight-bold"
              >Want your Image on Card?</v-col
            >
            <v-col cols="4" class="pa-1 pb-0">
              <v-switch
                v-model="showPartnerImage"
                inset
                style="display:inline"
                color="purple"
              ></v-switch>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-sheet class="mb-4">
      <div class="pl-11 pt-4">
        <v-row>
          <v-col cols="12" align="start" justify="start" class="py-0">
            <h3 class="font-weight-bold">Festive Greetings</h3>
          </v-col>
        </v-row>
      </div>

      <v-slide-group class="py-0" center-active show-arrows>
        <v-slide-item
          v-for="(imgData, index) in festiveGreetingsData"
          :key="index"
          v-slot:default="{ toggle }"
          class="width"
        >
          <FestiveBannerSingle
            :key="index"
            :API="imgData"
            :partnerName="partnerNameOnCard"
            :partnerNumber="partnerNumberOnCard"
            @click="toggle"
          />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-sheet class="mb-4">
      <div class="pl-8 pt-4">
        <v-row>
          <v-col cols="12" align="start" justify="start" class="py-0">
            <h3 class="font-weight-bold">Product Promotions</h3>
          </v-col>
        </v-row>
      </div>

      <v-slide-group class="py-0" center-active show-arrows>
        <v-slide-item
          v-for="(productBanner, index) in dailyProductsBannerData"
          :key="index"
          v-slot:default="{ toggle }"
          class="width"
        >
          <DailyProductBannerSingle
            :key="index"
            :API="productBanner"
            :partnerName="partnerNameOnCard"
            :partnerNumber="partnerNumberOnCard"
            :partnerAddress="partnerAddressOnCard"
            :partnerImageShouldBeShown="showPartnerImage"
            @click="toggle"
          />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
import FestiveBannerSingle from "./FestiveGreetingSingle.vue";
import DailyProductBannerSingle from "./DailyProductBannerSingle";
export default {
  name: "ProductSlider",
  components: { FestiveBannerSingle, DailyProductBannerSingle },
  data() {
    return {
      showPartnerName: true,
      showPartnerNumber: true,
      showPartnerAddress: true,
      showPartnerImage: true,
      partnerNameOnCard: "Yash Salvi",
      partnerNumberOnCard: "9876543210",
      partnerAddressOnCard: "Gujarat",
      festiveGreetingsData: "",
      dailyProductsBannerData: "",
    };
  },
  watch: {
    showPartnerName(value) {
      if (value === false) {
        this.partnerNameOnCard = "";
      } else if (value === true) {
        this.partnerNameOnCard = "Yash Salvi";
      }
    },
    showPartnerNumber(value) {
      if (value === false) {
        this.partnerNumberOnCard = "";
      } else if (value === true) {
        this.partnerNumberOnCard = "9876543210";
      }
    },
    showPartnerAddress(value) {
      if (value === false) {
        this.partnerAddressOnCard = "";
      } else if (value === true) {
        this.partnerAddressOnCard = "Ahmedabad";
      }
    },
  },
  methods: {
    getFestiveGreetingsData() {
      axios
        .get("https://afternoon-plains-76982.herokuapp.com/festiveGreeting")
        .then((data) => {
          console.log(data.data);
          this.festiveGreetingsData = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDailyProductsBannerData() {
      axios
        .get("https://afternoon-plains-76982.herokuapp.com/productBanner")
        .then((data) => {
          console.log(data.data);
          this.dailyProductsBannerData = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getFestiveGreetingsData();
    this.getDailyProductsBannerData();
  },
};
</script>

<style>
.card-outter {
  position: relative;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
.v-slide-group__next,
.v-slide-group__prev {
  align-items: center;
  display: flex;
  flex: 31px !important;
  justify-content: center;
  min-width: 31px !important;
}
.width {
  width: 300px;
}
</style>
