<template>
  <div>
    <v-card class="printMe">
      <v-img :src="API.imgURL">
        <v-card-title class="text-subtitle-2 font-weight-bold"
          ><span
            v-show="API.fields.isNameShown.isNameDisplayed == 'Yes'"
            :class="API.fields.isNameShown.textColor"
            :style="{
              position: 'absolute',
              top: API.fields.isNameShown.fromTop,
              left: API.fields.isNameShown.fromLeft,
              right: API.fields.isNameShown.fromRight,
              bottom: API.fields.isNameShown.fromBottom,
            }"
            >{{ partnerName }}</span
          >
          <p
            class="text-caption font-weight-bold"
            v-show="API.fields.isNumberShown.isNumberDisplayed == 'Yes'"
            :class="API.fields.isNumberShown.textColor"
            :style="{
              position: 'absolute',
              top: API.fields.isNumberShown.fromTop,
              left: API.fields.isNumberShown.fromLeft,
              right: API.fields.isNumberShown.fromRight,
              bottom: API.fields.isNumberShown.fromBottom,
            }"
          >
            {{ partnerNumber }}
          </p>
          <p
            class="font-weight-bold"
            v-show="API.fields.isAddressShown.isAddressDisplayed == 'Yes'"
            :class="API.fields.isAddressShown.textColor"
            :style="{
              position: 'absolute',
              top: API.fields.isAddressShown.fromTop,
              left: API.fields.isAddressShown.fromLeft,
              right: API.fields.isAddressShown.fromRight,
              bottom: API.fields.isAddressShown.fromBottom,
            }"
          >
            {{ partnerAddress }}
          </p>
          <img
            v-show="API.fields.isImageShown.isImageDisplayed == 'Yes'"
            v-if="partnerImageShouldBeShown"
            src="../../assets/profilePhoto.jpg"
            width="95"
            class="rounded-circle"
            :style="{
              position: 'absolute',
              top: API.fields.isImageShown.fromTop,
              left: API.fields.isImageShown.fromLeft,
              right: API.fields.isImageShown.fromRight,
              bottom: API.fields.isImageShown.fromBottom,
            }"
          />
        </v-card-title>
      </v-img>
    </v-card>
    <v-container> </v-container>
    <!-- <v-row class="pa-0">
      <v-col class="text-center" v-if="!isFormShown">
        <v-btn color="blue" class="white--text mb-2" @click="showForm"
          ><v-icon class="mr-1">mdi-creation</v-icon>Create with your
          details</v-btn
        >
        <v-btn color="green" class="white--text" @click="takeShot"
          ><v-icon class="mr-1">mdi-whatsapp</v-icon>Share without details
        </v-btn>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import axios from "axios";

export default {
  name: "DailyProductBanner",
  props: [
    "API",
    "partnerName",
    "partnerNumber",
    "partnerAddress",
    "partnerImageShouldBeShown",
  ],
  methods: {
    takeShot: async function() {
      let div = document.getElementsByClassName("printMe")[0];
      let ImageToUrl = await html2canvas(div);
      let image = ImageToUrl.toDataURL("image/png").replace(
        "image/png",
        "image/octet-stream"
      );
      console.log(image);
      window.location.href = image;
      await axios.get(
        "https://whatsapp-message-server.herokuapp.com/sendPartnerSpecificBanner"
      );
    },
    showForm: function() {
      this.isFormShown = !this.isFormShown;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: async function(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      console.log(image);

      reader.onload = async function(e) {
        vm.partner.photo = e.target.result;
        console.log(file);
      };
      reader.readAsDataURL(file);
    },
    toggleSettings: function() {
      this.bannerSettings.name = !this.bannerSettings.name;
      console.log(this.bannerSettings);
    },
  },
  created() {},
};
</script>
