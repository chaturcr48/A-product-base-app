<template>
  <v-tabs v-model="tab" @change="save">
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        TAB-1
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        TAB-2
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              TAB-1 Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>
       </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              TAB -2 Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis .
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
</template>

<script>
export default {
    name: 'Tab',
    data() {
        return{
            tab: Number(localStorage.getItem('tab') ?? 0)
        }
    },
    methods: {
    save(value) { 
        localStorage.setItem('tab', value)
    }
}
}
</script>
