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
        <v-content class="text-left ml-3 font-weight-bold subheading-1">
          Review and Ratings
      </v-content>
      <v-layout row wrap align-center>
        <v-flex class="text-left">
          <v-card
          width=60
          height=25
          elevation=0
            class="green rounded-lg ml-6 float-left"
          >
          <v-text class="white--text ml-2 mt-1">
              {{averageRating}}
          </v-text>
          <v-icon small color="white" class="mt-n1">
            mdi-star
          </v-icon>
           </v-card>
           <v-card 
            elevation="0"
           class="d-flex flex-end pl-5 font-weight-bold">
             <v-text>
               {{ratingsFetched.length}} Reviews
             </v-text>
           </v-card>
        </v-flex>
      </v-layout> 
      <v-divider
        class="mt-2 ml-3"
      >
      </v-divider>

      <v-container
        
         v-for="(rating) of ratingsFetched.slice(0,5)" :key='rating.userName'
         class="ml-n3"
      >


        <v-layout
        height="500"
        row wrap align-center class="mt-2">
        <v-flex
                  

        >
            <v-card
            width=50
            height=25
            elevation=0
              class="green rounded-lg ml-6 float-left"
            >
            <v-text class="white--text ml-2 mt-1 caption">
                {{rating.star}}
            </v-text>
            <v-icon small color="white" class="">
              mdi-star
            </v-icon>
            </v-card>
            <v-card 
              elevation="0"
            class="d-flex flex-end pl-5 subheading-1">
              <v-text>
                By: {{rating.userName}}
              </v-text>
            </v-card>  
        </v-flex> 
 
      </v-layout>
          <v-flex class="ml-3 mt-1">
            <v-text>
             {{rating.review}}
            </v-text>
          </v-flex>
          <v-divider
            class="mt-1 ml-3"
          >
          </v-divider>  
      </v-container>  
         <v-text class="float-right pt-n1 blue--text">
            View All
          </v-text>
      </v-container>
       <div class="divider mb-2 mt-2"></div>
     <v-container>
           <v-container >
            <v-content class="text-left font-weight-bold subheading-1">
                Rate The Product
            </v-content>
        <v-layout row wrap align-center>
          <v-flex class="text-left ml-2">
                <v-icon class="float-left" v-for="star in ratingStar" :key="star.id" :color="star.color" @click="rate(star.id)">
                    mdi-star
                </v-icon>
          </v-flex>
              <v-flex class="text-center">
                  {{ratingMessage.message}}
     
          </v-flex>
            <v-flex class="text-right mr-1">
                 <v-btn
                    v-if="!shown"
                    :color="color.purple"
                    outlined
                    small
                    align-center
                    @click="rateProduct()"
                >
                    Rate Product
                </v-btn>
               
          </v-flex>
        </v-layout>
      </v-container>

      <v-contanier
        v-if="shown"
      >
          <v-textarea
            v-model="ratingByUser.review"
            outlined
            auto-grow
            color="color.purple"
            label="Review"
            placeholder="Type your text here"
            class= "ma-1"
          >

          </v-textarea>

              <v-btn
                  
                    :color="color.purple"
                    outlined
                    class="center"
                    @click="productRated()"
                >
                    Rate Product
                </v-btn>
      </v-contanier>
    </v-container>

    <v-footer color="#6a1b9a" class="text-center" fixed padless elevation="6">
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
    </v-footer>
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
        lightPurple:"#963ACE"
      },
      ratingMessage:{
          message:" ",
         
      },
      ratingStar:[
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

        ],

        ratingByUser:{
            id:10,
            star:0,
            review:"",
            userName:"John"
        },
        averageRating:0,
        ratingsFetched:[],
        productInfo:{},
      shown:false

  }),

  methods:{
      rate(val){
          console.log(val);
          this.ratingByUser.star=val;
          this.ratingMessage.message=this.ratingStar[val-1].name;
          for(let i=0;i<=this.ratingStar.length;i++){
              if(i<=val-1){
                  this.ratingStar[i].color=this.color.yellow;

              }
              else{
                  this.ratingStar[i].color=this.color.grey;
              }
          }
    },
    rateProduct(){
        this.shown=!this.shown;
    },
    productRated:async function() {
        console.log(this.ratingByUser);
        this.shown=!this.shown;
        await axios.post('https://delivery-partner-api.herokuapp.com/api/rating/',{data:this.ratingByUser}
     )
    .then(function (response) {
        console.log(response);
    });
    this.fetchRating();
    
    },
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
      
      fetchRating:async function(){
        this.ratingsFetched=[];
        var productId=10;
        let ratings=await axios
                          .get(`https://delivery-partner-api.herokuapp.com/api/rating/${productId}`)
                          .then(
                            function(response){
                              // console.log(response.data);
                              return response.data;
                            }
                          );

        for(let rating of ratings){
          this.ratingsFetched.push(rating);
        }
          console.log(this.ratingsFetched);
        
        // console.log(this.ratingsFetched);
      },
      calculateAverageRating:async function(){
        await this.fetchRating();
        var averageRating=0;
        for(let rating of this.ratingsFetched){
          averageRating+=parseInt(rating.star);
        }
        var rate=Math.floor(averageRating/(this.ratingsFetched.length)*10)/10;
        this.averageRating=rate;
        return;
        
      }


        
  },
    created:function(){
          
        
  },
  beforeMount:function(){
    this.calculateAverageRating();
    this.loadProducts();


  }
  }
  
</script>

