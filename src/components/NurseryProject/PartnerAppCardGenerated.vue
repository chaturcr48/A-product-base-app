<template>
  <div class="mb-12 grey lighten-2">
    <v-system-bar dark color="primary">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <v-card
      color="purple"
      width="330"
      elevation="20"
      dark
      class="pa-4 mb-6  mt-12 ml-4 pt-1"
      id="printme"
      rounded="2"
    >
      <div v-if="valid">
        <v-row>
          <v-col cols="10" class="pa-1"
            ><span class="font-weight-black text-subtitle-2">{{
              name ? name : `Aniket Sinha`
            }}</span
            ><br />
            <span class="font-weight-black text-caption"
              >{{ WorkExperience ? WorkExperience : "8 yrs exp"
              }}<v-icon x-small color="purple">mdi-record</v-icon>
              {{ occupation ? occupation : "Developer" }}
            </span>
          </v-col>
          <v-col cols="2" align-self="end" class="pa-1">
            <v-icon large color="">
              mdi-facebook
            </v-icon>
          </v-col>
        </v-row>
        <v-row class="text-caption font-weight-medium">
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-email</v-icon
            ><span class="ml-1">{{
              email ? email : "john.doe@gmail.com"
            }}</span>
          </v-col>
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-phone</v-icon
            ><span class="ml-1"
              >{{ phoneNumber ? phoneNumber : "9876543210" }}
            </span></v-col
          >
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-map-marker</v-icon
            ><span class="ml-1"
              >{{ cityName ? cityName : "New York" }}
            </span></v-col
          >
        </v-row>
      </div>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="4"> </v-col>
        <v-col cols="8">
          <v-img
            class="center mt-12 mb-12"
            height="70px"
            width="70px"
            src="../../assets/check.png"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- <h2 class="mt-12 text-center">{{ $store.getters.name }}</h2> -->
    <p class="text-center">Your visiting card is created successfully</p>
    <v-row>
      <v-col class="text-center">
        <v-btn color="green" class="white--text"
          ><v-icon class="mr-1">mdi-whatsapp</v-icon>Share on whatsapp</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import { wordBreak } from 'html2canvas/dist/types/css/property-descriptors/word-break';
export default {
  data: () => ({
    valid: true,
    name: "",
    // image:'',
    email: "",
    phoneNumber: "",
    cityName: "",
    WorkExperience: "",
    occupation: "",
  }),
  created() {
    console.log(this.$store.getters.name);
  },
};
</script>

<style>
.abc {
  color: black;
}
.tick {
  margin: auto;
}
</style>
