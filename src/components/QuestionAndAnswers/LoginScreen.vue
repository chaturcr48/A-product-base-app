<template>
    <form>
      <h1 class="text-center mt-5">
        Login Screen
            </h1>
 

    <v-text-field
      class="ma-4"
      v-model="name"
      width=50%
      :counter="20"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
     class="ma-4"
      v-model="number"
      :counter="10"
      :rules="numberRule"
      label="Phone-Number"
      required
    ></v-text-field>


    <v-btn
      class="primary float-centre ma-4"
      width=90%
      @click="submit"
    >
      submit
    </v-btn>
  </form>
</template>

 
<script>
     
    export default {
      name: "login",
      data(){
        return{
          name:'',
          number:'',
          numberRule: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999999) || 'Phone-Number has to be 10 digit only']
        }
      },
      methods:{
        sendLoginDetails:function(){
          this.$root.$emit("loginDetails",this.name,this.number);
        },
        submit(){
          this.$router.push("/QnAs_questions");
          this.sendLoginDetails();
        }
      }
    }
</script>

