<template>
  <v-container class="grey lighten-2">
    <v-system-bar dark color="primary" class="mt-n3 pa-2">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <v-card color="purple" dark class="pa-4 pt-1" id="printme" rounded="2">
      <div>
        <v-row>
          <v-col cols="8" class="pa-1"
            ><span class="font-weight-black text-subtitle-2">{{
              name ? name : "Full Name"
            }}</span
            ><br />
            <span class="font-weight-black text-caption"
              >{{ WorkExperience ? WorkExperience : "Work Experience"
              }}<v-icon x-small color="purple">mdi-record</v-icon>
              {{ occupation ? occupation : "Occupation" }}
            </span>
          </v-col>
          <v-col cols="4" align-self="end" class="pa-1">
            <v-icon large color=""> mdi-facebook </v-icon>
          </v-col>
        </v-row>
        <v-row class="text-caption font-weight-medium">
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-email</v-icon
            ><span class="ml-1">{{ email ? email : "xyz@gmail.com" }}</span>
          </v-col>
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-phone</v-icon
            ><span class="ml-1"
              >{{ phoneNumber ? phoneNumber : "8888888888" }}
            </span></v-col
          >
          <v-col cols="12" class="pa-1">
            <v-icon color="" small>mdi-map-marker</v-icon
            ><span class="ml-1"
              >{{ cityName ? cityName : "Delhi" }}
            </span></v-col
          >
        </v-row>
      </div>
    </v-card>

    <v-card width="">
      <v-img
        height=""
        src="https://www.economist.com/sites/default/files/images/2014/06/blogs/babbage/20140628_stp501.jpg"
      >
        <v-card-title class="white--text mt-8">
          <v-avatar size="66">
            <img
              alt="user"
              src="https://fsb.zobj.net/crop.php?r=w03cclBSnzHJF-ngFv0wiawuClys0wlSpEsIj04R2oeKBKRyrfgI7dZwnp8XR8-3Djqhvp1LrR0S5JXeJmD1g_VwgMrg7LAQ6XDO_EgcqUZjyZNuw70WwTfdxktcvS_0FhaVWm87zQqz_lTi"
            />
          </v-avatar>
          <div class="ml-3 name">
            ASHOKE SOLANKI <br />
            FRENDY PARTNER <br />
            <span class="span">#EmpoweredHomepreneur</span>
          </div>
        </v-card-title>
        <v-container class="middle text-center">
          <div class="xyz">
            <div class="first">
              <v-icon dark>mdi-phone</v-icon>+91 9876543210
            </div>
            <div class="first">
              <v-icon dark>mdi-phone</v-icon>New Town, Kolkata
            </div>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-avatar size="86">
              <img
                src="https://fsb.zobj.net/crop.php?r=w03cclBSnzHJF-ngFv0wiawuClys0wlSpEsIj04R2oeKBKRyrfgI7dZwnp8XR8-3Djqhvp1LrR0S5JXeJmD1g_VwgMrg7LAQ6XDO_EgcqUZjyZNuw70WwTfdxktcvS_0FhaVWm87zQqz_lTi"
                alt="user"
              />
            </v-avatar>
          </div>
        </v-container>
        <v-container class="text-center">
          <v-avatar size="86">
            <img
              alt="user"
              src="https://fsb.zobj.net/crop.php?r=w03cclBSnzHJF-ngFv0wiawuClys0wlSpEsIj04R2oeKBKRyrfgI7dZwnp8XR8-3Djqhvp1LrR0S5JXeJmD1g_VwgMrg7LAQ6XDO_EgcqUZjyZNuw70WwTfdxktcvS_0FhaVWm87zQqz_lTi"
            />
          </v-avatar>
        </v-container>
        <h4 class="foot_head">
          Frendy se Groceries mangwayen..partner ko phone lagayen
        </h4>
      </v-img>
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
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field v-model="cityName" label="City" required></v-text-field>
        <v-text-field
          v-model="WorkExperience"
          label="Work Experience"
          required
        ></v-text-field>
        <v-text-field
          v-model="occupation"
          label="Occupation"
          required
        ></v-text-field>
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
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNumber: "",
      cityName: "",
      WorkExperience: "",
      occupation: "",
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
</style>

<style>
.span {
  font-size: 15px;
}
.middle {
  color: white;
  display: flex;
}
.first {
  color: white;
}
.foot_head {
  color: white;
  text-align: center;
  font-size: 13px;
}
.xyz {
  margin-left: 100px;
}
.name {
  font-size: 15px;
}
</style>
