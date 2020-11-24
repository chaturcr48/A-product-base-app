<template>
    <form>
      <h1 class="center">
        Login Screen
            </h1>

    <v-text-field
      v-model="name"
      width=50%
      :counter="20"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="number"
      :counter="10"
      label="Phone-Number"
      required
    ></v-text-field>


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
      name: "login",
      data(){
        return{
          name:'',
          number:''
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

