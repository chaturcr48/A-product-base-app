<template>
    <v-container fluid>
        <v-toolbar
        
        elevation=0
        class=""
        :color="color.purple"
        >
            <v-icon
                large
                color="white"
            >
                mdi-close
            </v-icon>
            <v-content
                class="white--text text-h6 ml-4"
            >View All Reviews</v-content>
        </v-toolbar>
        <v-container 
                        class="mt-2"
                         
                    >
                        <v-card v-for="review of reviews" :key="review.userId" 
                            elevation=0
                            :color="color.green"
                            width="50"
                            height="25"
                            class="rounded-lg font-weight-bold float-left white--text"
                    >
                        <p
                            class="ml-1 text-center"
                        >{{review.rating}}</p>
                        <v-icon small color="white" class="ml-1 text-center">
                            mdi-star
                        </v-icon>
                    </v-card>
                    <v-card  elevation="0" class="ml-16 ">
                        <p class="font-weight-bold">{{review.title}} <span class="float-right text-subheading-1">By: {{review.userId}}</span></p>
                        <p class='mt-n4 font-weight-normal setWidth'>{{review.review}}</p>
                        <v-divider :color="color.lightgrey">
                        </v-divider>
                    </v-card>
                    </v-container>

   
    </v-container>
</template>


<script>
import axios from 'axios';
export default {
    name:"ViewAllReviews",
    data:()=>({
        color:{
            purple:"#6a1b9a",
            yellow:"#ffeb3b",
            grey:"#c4c4c4",
            lightgrey:"#f7f7f7",
            lightPurple:"#963ACE",
            green:"#228b22"
    },
    reviews:[]
    }),
    methods:{

        fetchReviews: async function(){
            this.reviews=[];
            var productId=1;
            let reviews=await axios.get(`https://delivery-partner-api.herokuapp.com/api/v2/reviews/${productId}`);
            console.log(reviews.data.sendReviews);
            for(let review of reviews.data.sendReviews){
                this.reviews.push(review);

            }
    }
    },
    created:function(){
        this.fetchReviews();
    }
}
</script>

<style scoped>
.setWidth{
    width:100vw;
}

</style>