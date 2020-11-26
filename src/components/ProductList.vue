<template>
  <v-card
    class="mx-auto"
    width=""
  >
<v-row>
  <v-col cols=6>
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
    ></v-img>
  </v-col>
  <v-col cols=6>
     <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-col>
</v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>