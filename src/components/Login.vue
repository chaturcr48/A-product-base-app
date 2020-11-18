<template>
  <v-container class="pa-0">
    <v-sheet class="mx-auto" max-width="1200" 
    color="#35194D" height="300">
      <div align="center" justify="center">
        <v-img src="" 
        alt="" height="250px" width="250px" />
      </div>
    </v-sheet>
    <v-container class="login-container">
      <center><h2 class="mb-3 mt-3 font-weight-regular">USER LOGIN</h2></center>
      <v-row align="center" justify="space-around">
        <v-col cols="12">
          <v-text-field
            class="font-weight-regular"
            outlined
            label="Mobile number"
            prepend-inner-icon="mdi-phone"
            counter="10"
            prefix="+91 - "
            active
            color="purple darken-2"
            ref="numberField"
            :rules="[numberRule]"
            focus
          >
            <v-btn
              class="white--text mt-n2 font-weight-regular"
              slot="append"
              color="#FDDB46"
              elevation="0"
              >Login</v-btn
            >
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      numberRule: (v) => {
        // if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999999) return true;
        return "Incorrect mobile number";
      },
    };
  },
  mounted() {
    this.focus();
  },
  methods: {
    focus: function () {
      this.$refs.numberField.focus();
    },
  },
};
</script>