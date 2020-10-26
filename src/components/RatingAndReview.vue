<template>
  <div class="body">


    <v-app-bar height="50px" color="#6a1b9a" fixed dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Frendy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
      color="#6a1b9a"
      elevation="3"
      >
        SELECT PARTNER
      </v-btn>
    </v-app-bar>



    <v-container>
      <v-container>

      <v-row justify="center">
        <v-img
          :src="productInfo.imageAbsolutePath"
        ></v-img>
      </v-row>
      </v-container>
      <v-card class="mx-auto" elevation="0">
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-0">Britannia</div>

            <v-list-item-title class="headline mb-4">
              Britannia Bourbon
            </v-list-item-title>

            <v-list-item-subtitle class="pt-1 pb-1">
              <!-- <i class="fa fa-inr" aria-hidden="true"></i> -->
             {{productInfo.Variations[0].ProductPrices[0].salePrice}}
              <span class="text-decoration-line-through" style="color: red;">Rs 110.00</span>
              <span class="off"> Rs 7 off</span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="35" color="grey"
            ><v-btn icon >
              <v-icon>mdi-heart</v-icon>
            </v-btn></v-list-item-avatar
          >
        </v-list-item>
      </v-card>
      <div class="divider"></div>
      <div class="mt-3 mb-3">
        <v-chip outlined color="purple" class="ma-2" label>120 gm * 5</v-chip>
      </div>
      <div class="divider"></div>
      <v-container>
      <h3 class="production-description">PRODUCT SPECIFICATION</h3>
      </v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left">Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{productInfo.Variations[0].ProductSpecifications[0].value}}</td>
              <td>{{productInfo.Variations[0].ProductSpecifications[1].value}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="divider mb-2 mt-2"></div>
      <v-container>

        <h3 class="production-description">PRODUCT DESCRIPTION</h3>
        <p>{{productInfo.description}}</p>

      </v-container>
      <v-btn block rounded color="#6a1b9a" class="mb-4 mt-4"><span class="add">ADD</span> <span class="add-icon">+</span> </v-btn> 

    </v-container>
      <div class="divider mb-2 mt-2"></div>
     <v-container>
            <v-card
                elevation=0
            >
                <v-card-title
                    class="subheading-1 font-weight-bold"
                >
                    REVIEW AND RATINGS
                </v-card-title>
                <v-divider
                    :color="color.grey"
                    class="ml-4 mr-4 mt-n3"
                ></v-divider>
                <v-card elevation=0 height="70" class='mt-1'>
                    <v-card-title
                    >
                <p class="text-h6 font-weight-bold">
                Average Rating
                </p>
                <v-card
                        elevation=0
                        :color="color.green"
                        width="60"
                        height="30"
                        class="rounded-lg text-center font-weight-bold float-left white--text pl-1 mt-n4 ml-16"
                    >
                        <p
                            class="float-left pt-n1 text-subheading-2"
                        >{{calculateAverageRating()}}</p>
                        <v-icon color="white" class=" mt-n1">
                            mdi-star
                        </v-icon>
                    </v-card>
                </v-card-title>
            </v-card>
            <v-card height="70" elevation="0">
                <v-card-title
                >
                <p class="text-h6 font-weight-bold ">
                Total Reviews:
                </p>
                <p class="font-weight-normal pl-10 ml-10">
                {{reviews.length}}
            </p>
        </v-card-title>

            </v-card>
            <v-divider 
                :color="color.lightgrey"
                class="ml-4 mr-4"    
            >
            </v-divider>
            <v-card 
                elevation=0
                row wrap align-center
                class="mt-4 ml-4"
            >
                <v-flex 
                    elevation=0
                    class="text-left">
                    <v-container 
                        class="mt-1"
                        v-for="review of reviews.slice(0,5)" :key="review.userId"  
                    >
                        <v-card
                            elevation=0
                            :color="color.green"
                            width="50"
                            height="25"
                            class="rounded-lg font-weight-bold float-left white--text pl-1"
                    >
                        <p
                            class="ml-1 text-center float-left"
                        >{{review.rating}}</p>
                        <v-icon small color="white" class="ml-1 text-center">
                            mdi-star
                        </v-icon>
                    </v-card>
                    <v-card  elevation="0" class="float-left ml-5 ">
                        <p class="font-weight-bold">{{review.title}} <span class="float-right text-subheading-1">By: {{review.userId}}</span></p>
                        <p class='mt-n4 font-weight-normal setWidth'>{{review.review}}</p>
                        <v-divider :color="color.lightgrey">
                        </v-divider>
                    </v-card>
                    </v-container>

                    

                </v-flex>
        </v-card>


    </v-card>
        <v-card elevation=0 class="float-right text-decoration-underline  blue--text"> 
        <v-card-title class="text-subtitle-1">View All</v-card-title>
    </v-card>
    
    <v-card elevation="0" class='float-left' width="100%">
        <v-card-title class="float-left text-subtitle-2 mt-n3 font-weight-bold">Want to rate the product?</v-card-title>
        <v-btn
            v-if="!rateButton.isClicked"
            small
            align-center text-center
            class="float-right text-center"
            outlined
            :color="color.purple"
            @click="rateAndReviewToggle()"
            :disabled="!user.canReview"
        >
        Rate Product
        </v-btn>
    </v-card>

    <v-card 
    v-if="rateButton.isClicked"
        elevation=0 
        width="100%" 
        class="float-left text-center"
        >
        <v-icon
            large
            v-for="star of stars.starsArray" :key="star.id"
            :color="star.color"
            @click="numberOfStarsSelected(star.id)"

        >
            mdi-star
        </v-icon>
    </v-card>
    <v-textarea 
        v-if="rateButton.isClicked"
        v-model="stars.review"
        width="300"
        label="Review Description"
        class="float-left ml-16 ma-1 text-center"
        placeholder="Write your Review"
        outlined
    ></v-textarea>
        <v-btn
        v-if="rateButton.isClicked"
        align-center text-center
        width="190"
        class="float-left text-center ml-16 white--text"
        :color="color.purple"
        @click="storeRateAndRaview()"
        :disabled="!user.canReview"
    >
    Rate Product
    </v-btn>

    </v-container>

    <!-- <v-footer color="#6a1b9a" class="text-center" fixed padless elevation="6">
      <v-row class="mt-0 mb-0" dense>
        <v-col cols="3">
          <v-btn color="white" icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <h6 style="color: white">Home</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon><v-icon> mdi-magnify </v-icon></v-btn>
          <h6 style="color: white">Search</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon>
            <v-icon> mdi-account</v-icon></v-btn
          >
          <h6 style="color: white">Account</h6>
        </v-col>
        <v-col cols="3">
          <v-btn color="white" icon> <v-icon> mdi-cart </v-icon> </v-btn>
          <h6 style="color: white">Cart</h6>
        </v-col>
      </v-row>
    </v-footer> -->
  </div>
</template>


<style scoped>
.production-description{
  margin-top: 15px;
  margin-bottom: 25px;
}
.off {
  color: green;
  margin-left: 10px;
  background-color: rgba(90, 238, 90, 0.377);
}
.divider {
  height: 15px;
  background-color: #f1f1f1;
}
.body{
  margin-bottom: 55px;
}
.add{
  color: white;
}
.add-icon{
  margin-left: 10px;
  font-size: 25px;
  color: white;
}
</style>

<script>
  export default{
    name:"RatingAndReview",
    data:()=>({
      
    })
  }
</script>

<style scoped>
.off {
  color: green;
  background-color: rgba(90, 238, 90, 0.377);
}
.divider {
  height: 15px;
  background-color: rgba(100, 148, 237, 0.144);
}
.setWidth{
    width:200px;
}

</style>

<script>

  import axios from 'axios';
  export default {
      name:"ReviewAndrating",
    data: () => ({
      color:{
        purple:"#6a1b9a",
        yellow:"#ffeb3b",
        grey:"#c4c4c4",
        lightgrey:"#f7f7f7",
        lightPurple:"#963ACE",
        green:"#228b22"
      },
       productInfo:{},
        user:{
              userId:"u25",
              canReview:false
        },
        stars:{
              starsSelected:0,
            review:'',
            starsArray:[
                            {
                                id:1,
                                name:"Very Bad",
                                color:"#c4c4c4"

                            },
                            {
                                id:2,
                                name:"Bad",
                                color:"#c4c4c4"

                            },
                            {
                                id:3,
                                name:"Good",
                                color:"#c4c4c4"

                            },
                            {
                                id:4,
                                name:"Very Good",
                                color:"#c4c4c4"

                            },
                            {
                                id:5,
                                name:"Excellent",
                                color:"#c4c4c4"

                            },  
          ]
      },
      reviews:[],
      rateButton:{
          isClicked:false
      }


  }),

  methods:{
     
     loadProducts:async function(){
              axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
              axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
                let product= await axios
                .get(`https://delivery-partner-api.herokuapp.com/api/product`)
                .then(function(response){
                   console.log(response);
                    return response.data;
                  }        
                );
              this.productInfo=product;
        },
        numberOfStarsSelected(i){
            this.stars.starsSelected=i;
            for(let star of this.stars.starsArray){
                if(star.id<=i){
                    star.color=this.color.yellow;
                }
                else{
                    star.color=this.color.grey;
                }
                
            }
            console.log(this.stars.starsSelected);
        },
        rateAndReviewToggle(){
            this.rateButton.isClicked=!this.rateButton.isClicked;
        },
        storeRateAndRaview:async function(){
            let reviewTitle=this.stars.starsArray[parseInt(this.stars.starsSelected)-1].name;
            let review={
                productId:1,
                userId:'u25',
                rating:this.stars.starsSelected,
                title:reviewTitle,
                review:this.stars.review
            }
            let userId='u25';
            let reviewResponse= await axios.post(`https://delivery-partner-api.herokuapp.com/api/v2/reviews/1/${userId}`,{data:review});
            console.log(reviewResponse);
            this.rateButton.isClicked=!this.rateButton.isClicked;

        },
        fetchReviews: async function(){
            this.reviews=[];
            var productId=1;
            let reviews=await axios.get(`https://delivery-partner-api.herokuapp.com/api/v2/reviews/${productId}`);
            console.log(reviews.data.sendReviews);
            for(let review of reviews.data.sendReviews){
                this.reviews.push(review);

            }
        },
        checkIfAlreadyReviewed:async function(){
            console.log("Checking Review");
            let reviewFound=await axios.get(`https://delivery-partner-api.herokuapp.com/api/v2/reviews/1/${this.user.userId}`);
            this.user.canReview=reviewFound;
            console.log(reviewFound.data);
            return reviewFound;

        },
        calculateAverageRating:function(){
            var averageRate=0;
            for(let review of this.reviews){
                averageRate+=parseInt(review.rating);
            }
            averageRate=averageRate/this.reviews.length;
            averageRate=averageRate.toFixed(1);
            console.log(averageRate);
            return averageRate;
        }


      
  },
  created:function(){
    this.fetchReviews();
    this.calculateAverageRating();
    this.checkIfAlreadyReviewed();      
        
  },
  beforeMount:function(){
    this.loadProducts();


  }
  }
  
</script>

