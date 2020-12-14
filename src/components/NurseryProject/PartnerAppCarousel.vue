<template>
  <div class="grey lighten-2">
    <v-card flat tile>
      <v-window v-model="onboarding" cycle>
        <v-window-item v-for="(data, index) in data" :key="index">
          <v-card color="purple" height="400">
            <v-row class="fill-height" align="center" justify="center">
              <h1 style="font-size: 5rem;" class="white--text">
                Slide {{ index + 1 }}
              </h1>
            </v-row>
          </v-card>
          <v-row class="mx-3">
            <v-col align-self="center" class="text-center">
              <div class="font-weight-black text-h6">{{ data.mainTitle }}</div>
              <div class="grey--text text-subtitle-2">{{ data.subtitle }}</div>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <!-- <v-btn text @click="prev" color="purple">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
        <v-row>
          <v-col cols="6" offset="3">
            <v-item-group
              v-model="onboarding"
              class="text-center purple--text"
              mandatory
            >
              <v-item
                v-for="n in length"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <v-btn
                  :input-value="active"
                  icon
                  @click="toggle"
                  color="purple"
                >
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
          </v-col>
        </v-row>
        <!-- <v-btn text @click="next" color="purple">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn> -->
      </v-card-actions>
    </v-card>
    <v-row>
      <v-col cols="11" offset="">
        <v-btn
          v-on:click="goToCart()"
          class="ml-4"
          width="80%"
          color="primary white--text"
          block
          >Get Started</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0,
    data: [
      {
        mainTitle: "Brand Yourself 1",
        subtitle: "Get your personalized digital Visiting Card and Website 1",
      },
      {
        mainTitle: "Brand Yourself 2",
        subtitle: "Get your personalized digital Visiting Card and Website 2",
      },
      {
        mainTitle: "Brand Yourself 3",
        subtitle: "Get your personalized digital Visiting Card and Website 3",
      },
    ],
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    goToCart() {
      this.$router.push("/partnerAppCardScreen1");
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
  mounted() {
    setInterval(() => {
      this.next();
    }, 2000);
  },
};
</script>
