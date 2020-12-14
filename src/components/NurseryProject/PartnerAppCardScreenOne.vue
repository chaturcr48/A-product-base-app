<template>
  <div class="indigo darken-4">
    <v-system-bar dark color="primary">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
    <div class="mt-8">
      <h2 class="text-center pa-3 mt-2 heading1">
        Let's start with creating your digital visiting card.
      </h2>
      <p class="mt-5 text-center heading2">
        This will help to market yourself to your clients and friends.
      </p>
    </div>
    <v-container>
      <v-card width="100%" elevation="8">
        <v-img
          src="../../assets/PartnerCard.png"
          width="100%"
          class="pa-4 mb-4"
          contai
        >
        </v-img>
      </v-card>
    </v-container>
    <v-btn
      class="primary float-centre ma-4"
      color="success"
      width="90%"
      @click="goToCardCreation"
    >
      Generate Your Card
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PartnerAppCardScreen1",
  methods: {
    goToCardCreation() {
      // this.$router.push("/HelloWorld");
      this.$router.push("/PartnerAppCardCreation");
    },
  },
};
</script>

<style>
.heading1 {
  color: white;
  width: 80%;
  margin: auto;
}
.heading2 {
  width: 90%;
  margin: auto;
  color: rgba(255, 255, 255, 0.568);
}
.abc {
  color: black;
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
.last {
  margin-top: -30px;
}
</style>
