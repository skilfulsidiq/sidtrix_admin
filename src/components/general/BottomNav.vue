<template>
    <div>
        <v-bottom-navigation 
      :value="bottombar_active_btn"
      class="mynavbar"
      :fixed=true
      app
      color="#000"
      
    >
      <v-btn class="mynavbar_btn" @click="goLink('home')">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn class="mynavbar_btn" @click="goLink('mylisting')">
        <span>Listing</span>
        <v-icon>mdi-format-list-bulleted                              </v-icon>
      </v-btn>
      <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"
        class="myfab"
              absolute
              fab
              top
              color="green"
              dark
            >
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
      </template>
      <span>Add Property</span>
      </v-tooltip>
      <v-btn class="mynavbar_btn" @click="goLink('mycollection')">
        <span>Collections</span>
        <v-icon>mdi-view-grid-outline</v-icon>
      </v-btn>
      <v-btn class="mynavbar_btn" @click="goLink('requestform')">
        <span>Request</span>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
  </v-bottom-navigation>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // bottombar_active_btn:0;
        }
    },
    computed: {
        bottombar_active_btn(){
            switch (this.$route.name) {
                case 'home':
                    return 0;
                break;
                case 'mylisting':
                    return 1;
                break;
                case 'mycollection':
                return 3;
                break;
                case 'requestform':
                return 4;
                break;
            
                default:
                return 0;
                break;
            }
        }
    },
    methods: {
        goLink(link){
            return this.$router.push({name:link})
        },
    },
}
</script>
<style scoped>
.myfab{
  border-radius: 50% !important;
  min-width:56px !important;
  /* background:green; */
  color:#fff;
  /* color:white; */
}
.theme--light.v-bottom-navigation .mynavbar_btn:not(.v-btn--active) {
   color: rgba(0,0,0,0.50) !important;
}
</style>