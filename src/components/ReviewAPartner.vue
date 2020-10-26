<template>
    <v-container>
        <v-card
            v-for="partner of partners" :key="partner.id"
            class="pt-4 pb-4 mt-2"
            elevation="0"
            outlined
        >
            <v-avatar
                size="60"
                :color="color.lightPurple"
                rounded
                class="rounded-circle ml-2 float-left"
            >
                <v-img src="@/assets/boy.png"
                    contain
                    height="40"
                >

                </v-img>
            </v-avatar>
            <v-card-title
                class="font-weight-bold float-center mt-n3"
            >{{partner.name}}</v-card-title>
            <v-btn
                small
                outlined
                :color="color.purple"
                class="ml-4 mt-n5"
                @click="toggleReviewList()"
            >
                View Reviews
            </v-btn>
            <v-btn
                small
                :color="color.purple"
                class="white--text ml-2 mt-n5"
                @click="toggleReviewSection()"
            >
                Review A Partner
            </v-btn>

            <v-card
                elevation=0
                v-for="reviewItem of partnerReviews" :key="reviewItem.userName"
            >
                <v-card-title
                    class="text-subtitle-1 ml-16"
                    v-if="review.showReviews"

                ><span>{{reviewItem.description}}</span><span class="ml-5">By: {{reviewItem.userName}}</span></v-card-title>
                <v-divider>

                </v-divider>
            </v-card>
            <v-card
                v-if="review.toBeReviewed"
            >
                <v-textarea
                    placeholder="Write your Review"
                    v-model="review.description"
                    class="ma-4"
                    outlined
                    label="Review A Partner"
                >
                </v-textarea>
                <v-btn
                    width="90%"
                    elevation=0
                    :color="color.purple"
                    class="ml-5 mt-n8 white--text"
                    @click="submitReview()"
                >
                    Submit Review
                </v-btn>
             </v-card>

        </v-card>


        
    </v-container>
</template>


<script>
import axios from 'axios';
export default {
    name:"ReviewAPartner",
    data:()=>({
        color:{
            purple:"#6a1b9a",
            yellow:"#ffeb3b",
            grey:"#c4c4c4",
            lightgrey:"#f7f7f7",
            lightPurple:"#D8BFD8",
            green:"#228b22"
        },
        review:{
            toBeReviewed:false,
            description:'',
            showReviews:false
        },
        partners:[],
        partnerReviews:[]
    }),
    methods:{
        fetchPartners:async function(){
            let partners=await axios.get("https://delivery-partner-api.herokuapp.com/api/v2/reviews/partners/1");
            console.log(partners.data);
            for(let partner of partners.data){
                this.partners.push(partner);
            }
            console.log(this.partners);
        },
        toggleReviewSection:function(){
            this.review.toBeReviewed=!this.review.toBeReviewed;
            return this.review.toBeReviewed;
        },
        toggleReviewList:function(){
            console.log("Toggling Review list");
            console.log(this.review.showReviews);
            this.review.showReviews=!this.review.showReviews;
            console.log(this.review.showReviews);
            return this.review.showReviews;
        },
        submitReview:async function(){
            let reviewToSend={};
            reviewToSend.userName="Aniket";
            reviewToSend.description=this.review.description;
            console.log(reviewToSend);
            let response=await axios.post("https://delivery-partner-api.herokuapp.com/api/v2/reviews/partners/1",{data:reviewToSend});
            console.log(response);
            this.fetchReviews();

        },
        fetchReviews:async function(){
            let reviews=await axios.get("https://delivery-partner-api.herokuapp.com/api/v2/reviews/partners/reviews/1");
            console.log(reviews.data);
            for(let review of reviews.data){
                this.partnerReviews.push(review);
            }

        }
    },
    created:function(){
        this.fetchPartners();
        this.fetchReviews();
    }
}
</script>