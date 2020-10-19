<template>
  <v-container>
    <v-card
    align-center
      class=" mt-14 pa-4 text-center"
      elevation="5"
      height="auto"

    >
    <v-row>
       <v-progress-linear
        class="text-center mt-12 ml-5 mr-5"
        :value="calculateProgress()"
        color="activeOrderBackground"
        background-color="inactiveOrderBackground"
        height="5"
        ></v-progress-linear>
        <v-col md3>
        <v-avatar
        class="mt-n13 align-left"
        :color="changeColorOfCompletedStage(0)?completed.color:incomplete.color"
        :size="checkActiveStatus(0)?activeSize:inactiveSize"
        >
        <v-img src="@/assets/online-order.png"
          contain
          height="40"
         ></v-img>
        </v-avatar>
        <v-content class="caption font-weight-bold">Ordered</v-content>
      </v-col>

      <v-col md3>
        <v-avatar
        
        class="mt-n13 align-left"
        :size="checkActiveStatus(1)?activeSize:inactiveSize"
        :color="changeColorOfCompletedStage(1)?completed.color:incomplete.color"

        >
        <v-img src="@/assets/electric-bus.png"
          contain
          height="40"
         ></v-img>
        </v-avatar>
        <v-content class="caption font-weight-bold">Shipped</v-content>

      </v-col>
      <v-col md3>
        <v-avatar
        class="mt-n13 align-left"
        :color="changeColorOfCompletedStage(2)?completed.color:incomplete.color"
        :size="checkActiveStatus(2)?activeSize:inactiveSize"
        >
        <v-img src="@/assets/delivery-man.png"
          contain
          height="50"
         ></v-img>
        </v-avatar>
        <v-content class="caption font-weight-bold" >Out For Delivery</v-content>

      </v-col>
      <v-col md3>
        <v-avatar
        class="mt-n13 align-left"
        :color="changeColorOfCompletedStage(3)?completed.color:incomplete.color"
        :size="checkActiveStatus(3)?activeSize:inactiveSize"

        >
        <v-img src="@/assets/calendar.png"
          contain
          height="30"
          
         ></v-img>
        </v-avatar>
        <v-content class="caption font-weight-bold" >Delivered</v-content>

      </v-col>
     
  
    </v-row>
    <v-row>
      <v-content class="text-grey body-2 font-weight-bold pl-5 pr-5">
        Your package with RiteElite Yoghurt Berry Bar ... is {{ statusArray[orderStatus].status}} on Sat,19 Sep by Agent (+916xxxxxxx56).
      </v-content>
    </v-row>
    <v-row>
      <v-col md-10>
        <v-content class="float-left ml-2 font-weight-bold">Status:{{ statusArray[orderStatus].status}}</v-content>
      </v-col>
      <v-col md-2>
        <v-content class="float-right mr-3 text-decoration-underline">View Details</v-content>
      </v-col>
    </v-row>
    
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'OrderSummary',
    data:()=>({
      orderStatus:1,
      statusArray:[
    {
        status:"Ordered",
        completed:false
    },
    {
        status:"Shipped",
        completed:false
    },
    {
        status:"Out For Delivery",
        completed:false
    },
    {
        status:"Delivered",
        completed:false
    }
    ],
    orderMessage:`Your package with RiteElite Yoghurt Berry Bar ... is on Sat,19 Sep by Agent (+916xxxxxxx56).`,
      completed:{
        color:"#FCA219"
      },
      incomplete:{
        color:"#FFECE6"
      },
      color:"green",
      inactiveSize:60,
      activeSize:75,
      config:{
        primary:'green'
      }
    }),
    methods:{

      calculateProgress(){
        var progress=(this.orderStatus+1)*25;
        return progress;
      },

      checkCurrentOrderStatus(){
        var currentOrderStage=this.orderStatus;
        for(let i=0;i<=currentOrderStage;i++){
          this.statusArray[i].completed=true;
        }
        console.log(this.statusArray);
      },
      changeColorOfCompletedStage(num){
        this.checkCurrentOrderStatus();
        console.log(this.statusArray[num].completed);
        if(this.statusArray[num].completed===true){
          console.log(true);
          return true;
        }
        else{
          return false;
        }
      },
      checkActiveStatus(num){
        this.checkCurrentOrderStatus();
        if(this.orderStatus==num){
          return true;
        }
        else{
          return false;
        }
      }
    }

  }
</script>
