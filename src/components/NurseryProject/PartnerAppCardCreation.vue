<template>
  <v-container
    class="grey lighten-2
"
  >
    <v-system-bar dark color="primary" class="mt-n3 pa-2">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <v-card class="mx-auto" max-width="344">
      <div class="printMe">
        <v-img src="../../assets/CardBlank.png" height="200px" class="img">
          <v-avatar class="profile-image" size="45">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-card-title class="px-3 py-1 text-subtitle-2 font-weight-bold">
            <div class="name-position yellow--text">
              {{ name ? name : "Full Name" }}<br />Frendy Partner <br /><span
                class="white--text hashtag"
                >#EmpoweredHomepreneur</span
              >
            </div>
            <div class="number-position white--text">
              <v-icon small class="white black--text mr-1">mdi-phone</v-icon>
              {{ phoneNumber ? `+91 ${phoneNumber}` : "+91 8888888888" }}
              <span class="address-position">
                <v-icon small class="white black--text mr-1"
                  >mdi-map-marker</v-icon
                >
                {{ cityName ? cityName : "City Name"
                }}{{ stateName ? `,${stateName}` : ",State Name" }}</span
              >
            </div>
          </v-card-title>
        </v-img>
      </div>
    </v-card>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="20"
          ref="Name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field v-model="cityName" label="City" required></v-text-field>
        <v-text-field v-model="stateName" label="State" required></v-text-field>
      </v-form>
      <v-btn color="primary" class="ma-4" width="90%" @click="submitCard()"
        >Generate Visiting Card</v-btn
      >
    </v-container>
  </v-container>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  name: "Card",
  data() {
    return {
      valid: true,
      name: "",
      cardIndex: 0,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
      ],
      phoneNumber: "",
      cityName: "",
      stateName: "",
    };
  },

  methods: {
    takeShot: async function() {
      let div = document.getElementById("printme");
      let ImageToUrl = await html2canvas(div);
      this.image = ImageToUrl.toDataURL("image/png").replace(
        "image/png",
        "image/octet-stream"
      );
      window.location.href = this.image;
      console.log(this.image);
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitCard() {
      //  console.log(this.$refs.Name.value);
      this.$router.push("/partnerAppCardGenerated");
      this.$store.commit("update", this.name);
    },
  },
};
</script>

<style>
.avtar {
  text-align: center;
}
.avtar img {
  width: 100px;
}
.abc {
  margin: 8px;
}
.name-position {
  color: white;
  margin-left: 44.25px;
  margin-top: 7.8px;
  font-size: 0.8rem;
  line-height: 1.3;
}
.hashtag {
  display: block;
  font-size: 0.5rem;
  padding-top: -100px;
}
.profile-image {
  margin-left: 10px;
  margin-top: 10px;
  position: absolute;
}
.number-position {
  margin-top: 19px;
  margin-left: 90px;
  font-size: 0.75rem;
}
.address-position {
  font-size: 0.75rem;
  display: block;
  margin-top: -8px;
}
</style>
