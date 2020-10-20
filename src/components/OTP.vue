<template>
  <v-container class="pa-0">
    <v-sheet class="mx-auto" max-width="1200" color="#35194D" height="300">
      <div align="center" justify="center">
        <v-img
          src="../assets/frendy.png"
          alt=""
          height="250px"
          width="250px"
        /></div>
      </v-sheet>
    <v-container>
      <center><h2 class="font-weight-regular">Please enter the OTP</h2></center>
      <v-row >
        <v-col cols="12" align="center" justify="center" class="mb-6 mt-4">
          <div id="divOuter">
            <div id="divInner">
              <input id="partitioned" type="text" maxlength="4" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==4) return false;"/>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-btn block color="#FDDB46" class="white--text" elevation="0" large>Verify</v-btn>
      <v-btn block class="purple--text" text elevation="0" large>Back</v-btn>
    </v-container>
  </v-container>
</template>

<style scoped>
#partitioned {
  margin-left: 0px;
  padding-left: 25px;
  letter-spacing: 45px;
  border: 0;
  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 58px 1px;
  background-repeat: repeat-x;
  background-position-x: 45px;
  width: 220px;
  min-width: 220px;
}

#divInner{
  position: sticky;
}

#divOuter{
  width: 250px; 
  overflow: hidden;
}
</style>