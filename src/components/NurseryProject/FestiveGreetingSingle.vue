<template>
  <div>
    <v-container>
      <v-card class="mx-auto" max-width="344">
        <div class="printMe">
          <v-img :src="API.imgURL" height="200px" class="img">
            <v-card-title class="px-3 py-1 text-subtitle-2 font-weight-bold">
              <span
                v-show="API.fields.isNameShown.boolean == 'Yes'"
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
              <span
                v-show="API.fields.isNumberShown.boolean == 'Yes'"
                :class="API.fields.isNumberShown.textColor"
                :style="{
                  position: 'absolute',
                  top: API.fields.isNumberShown.fromTop,
                  left: API.fields.isNumberShown.fromLeft,
                  right: API.fields.isNumberShown.fromRight,
                  bottom: API.fields.isNumberShown.fromBottom,
                }"
              >
                <v-icon color="purple" small v-show="partnerNumber"
                  >mdi-phone</v-icon
                >{{ partnerNumber }}
              </span>
            </v-card-title>
          </v-img>
        </div>
        <v-card-actions>
          <v-row class="pa-0">
            <v-col class="text-center pa-0">
              <v-btn color="green" class="white--text"
                ><v-icon class="mr-1">mdi-whatsapp</v-icon>Share on
                whatsapp</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "FestiveBannerSingle",
  props: ["API", "partnerName", "partnerNumber"],
  mounted: {
    takeShot: async function() {
      let div = document.getElementsByClassName("printMe")[0];
      let ImageToUrl = await html2canvas(div);
      let image = ImageToUrl.toDataURL("image/png").replace(
        "image/png",
        "image/octet-stream"
      );
      console.log(image);
      window.location.href = image;
    },
  },
};
</script>

<style scoped>
.img {
  position: relative;
}
</style>
