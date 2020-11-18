<template>
    <v-container >
        <div v-for="item in formData" v-bind:key="item._id">
            <v-card align="center">
                <v-card-title>Requsted Item: {{item.item}}</v-card-title>
                <v-img v-bind:src="item.img" height="150" width="100" ></v-img>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FormView',
    data() {
        return{
            formData: []
        }
    },
    async mounted() {
        await axios
        .get('https://partnerpincode.herokuapp.com/form')
        .then(response => {
            this.formData = response.data;
            console.log(response.data)
        });
    },
}
</script>