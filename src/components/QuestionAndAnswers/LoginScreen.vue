<template>
    <form>
      <h1 class="center">
        
    <v-text-field
      v-model="name"
      width=50%
      :error-messages="nameErrors"
      :counter="20"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="number"
      :error-messages="emailErrors"
      :counter="10"
      label="Phone-Number"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
      class="primary mt-5 ml-16 justify-centre
      
      "
      @click="submit"
    >
      submit
    </v-btn>
  </form>
</template>

 
<script>
     
    export default {
      name: "login"
    }
</script>

<style>

</style>
