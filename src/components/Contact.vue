<template>
    <v-container class="con-b">
        <v-row class="row-b mt-4 mb-4 pl-3">Email Address : frendy123@gmail.com</v-row>
        <v-row class="row-b mb-4 pl-3">Mobile no : 9988776655</v-row>
        <v-row class="row-b mb-4 pl-3">Address :  Jamuna Nagar Park North-Delhi</v-row>
        <v-row class="row-b last-row"> <span><em>You can also contact us on</em></span> 
            <v-btn color="white" icon>
             <v-icon> mdi-facebook <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
            </v-btn>
            <v-btn color="white" icon>
             <v-icon> mdi-twitter <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
            </v-btn>
            <v-btn color="white" icon>
             <v-icon> mdi-email <i class="fa fa-facebook" aria-hidden="true">icon</i> </v-icon> 
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.con-b{
    background-color: #6a1b9a;

}
.row-b{
    color: white;
}
span{
    color: rgba(255, 255, 255, 0.438);
    font-size: 14px;
    padding-top: 7px;
}
.last-row{
    margin-top: 80px;
    text-align: center;
    justify-content: center;
}
</style>