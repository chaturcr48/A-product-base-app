<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            >
                <form enctype="multipart/form-data" @submit.prevent="submitResponse">
                    <div class="form-control">
                    <v-text-field
                        name="item" v-model="item"
                        label="Product Request"
                        required
                    ></v-text-field>
                    <v-file-input
                        name="file" ref="file" v-model="file"
                        accept="image/*"  
                        label="File input"
                        ></v-file-input>
                    <v-btn
                        class="mr-4"
                        type="submit"
                    >submit
                    </v-btn>
                    </div>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Form',
    data() {
        return{
            item: '',
            file: ''
        }
    },
    methods: {
        async submitResponse(){
            console.log(this.item)
            console.log(this.file)

            const formData = new FormData();
            formData.append('file', this.file)
            formData.append('item', this.item)
            await axios
            .post('https://api-oqcqf.run-ap-south1.goorm.io/form', formData
            )
            .then((response) => {
                console.log(response)
          })
            .catch((error) => {
                console.log(error);
                this.error = error.message;
            });
            this.item = '',
            this.file =  ''
        }
    },
}
</script>