<template>
    <v-container >
        <div v-for="item in formData" v-bind:key="item._id">
            <v-card align="center">
                <v-title>Requsted Item: {{item.item}}</v-title>
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
        .get('https://api-oqcqf.run-ap-south1.goorm.io/form')
        .then(response => {
            this.formData = response.data;
            console.log(response.data)
        });
    },
}
</script>