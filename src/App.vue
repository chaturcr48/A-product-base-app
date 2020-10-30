<template>
  <div>
    <v-app>
      <SearchResultsPage />
    </v-app>
  </div>
</template>

<script>
import SearchResultsPage from "./components/SearchResultsPage";
export default {
  name: "App",
  components: {
    SearchResultsPage,
  },
};
</script>
