<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <form enctype="multipart/form-data" @submit.prevent="submitResponse">
          <div class="form-control">
            <v-text-field
              name="pincode"
              v-model="pincode"
              label="Enter Pincode"
              required
            ></v-text-field>
            <v-text-field
              name="state"
              v-model="stateName"
              label="State"
              required
            ></v-text-field>
            <v-text-field
              name="city"
              v-model="taluk"
              label="City"
              required
            ></v-text-field>
            <v-btn class="mr-4" type="submit">submit </v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getAddressfromPIN from "india-pincode-lookup";
export default {
  name: "ZipFill",
  data() {
    return {
      pincode: [],
      stateName: [],
      taluk: [],
    };
  },
  watch: {
    pincode(value) {
      if (value.length === 6) {
        const [{ taluk, stateName }] = this.getAddress(value);
        this.taluk = taluk;
        this.stateName = stateName;
      } else {
        this.taluk = "";
        this.stateName = "";
      }
    },
  },
  methods: {
    getAddress(PINcode) {
      return getAddressfromPIN.lookup(PINcode);
    },
  },
};
</script>