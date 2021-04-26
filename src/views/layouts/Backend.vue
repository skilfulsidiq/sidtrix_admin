
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>    
      <v-list dense>
         <!-- for testing -->
            <nav-list   v-for="(item,i) in navigation_menu" :key="i"
              :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"
            
             :hasChildren=item.hasChildren :show_heading="item.show_heading" ></nav-list>

          
         

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp" elevation="1" app color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <!-- <v-img alt="Newhomes" class="shrink mr-2"  contain  src="../../assets/logo.png" width="100px" height="20px" /> -->
      </v-toolbar-title>
       <!-- <v-text-field
      solo
       hide-details
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field> -->
         
      <v-spacer />
      <v-spacer />
      <template >
          <!-- <div class="padme_ho" style="border-right:1px solid #f2f2f2;"> -->
              <v-toolbar-title
        style="width: 150px;border-right:1px solid #f2f2f2; text-align:center"
        class="ml-0 padme_ho"
      >
        <!-- <v-img alt="Newhomes" class="shrink mr-2"  contain  src="../../assets/logo.png" width="100px" height="20px" /> -->
        <!-- <div :style="{backgroundImage:'url('+lender.lender_logo+')'}" class="lender_logo"></div> -->
      </v-toolbar-title>
          <!-- </div> -->
        <!-- <v-spacer></v-spacer> -->
        <avatar />
          
      </template>
        <!-- <v-img alt="Newhomes" class="shrink mr-2"  contain  src="../../assets/logo.png" width="100px" height="20px" /> -->
          <!-- <v-spacer /> -->
       
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
     

    </v-app-bar>
    <v-main>
       <v-container class="mycontainer"
      > 
        <router-view></router-view>
      </v-container> 
    </v-main>
   
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-mail"
                placeholder="Email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-footer>
      FinancePlus
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>

<script>
import {loadingMixin} from '../../mixins/Loading'
  export default {
    mixins:[loadingMixin],
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      sampe_img_link:'https://www.google.com/search?biw=1600&bih=718&tbm=isch&sxsrf=ACYBGNSiTf7T5CMkwbDOiLQbKcH6KQluyA%3A1579861007453&sa=1&ei=D8QqXoOpG6TuxgOHg5HICQ&q=firsttrust+logo+mortgage#',
        user_menu: [
        { title: 'Profile',icon:'mdi-account',link:'profile' },
        { title: 'Sign Out',icon:'mdi-logout',link:'logout' }
      ],
      navigation_menu: [
        { icon: 'mdi-home', text: 'Dashboard',link:'home' },
     
        {
          icon: 'mdi-account-group',
          'icon-alt': 'mdi-chevron-up',
          text: 'Students',
          model: false,
          prepend_icon:'mdi-chevron-down',
          hasChildren:true,
          children: [
            { icon: 'mdi-file-outline', text: 'All Students',link:'students' },
            { icon: 'mdi-file-outline', text: 'Student Assessment',link:'studentassesment' },
            { icon: 'mdi-people', text: 'StudentCourse',link:'studentcourse' }
          ],
          },
        {
          icon: 'mdi-book',
          'icon-alt': 'mdi-users',
            text: 'Assessments',
            prepend_icon:'mdi-chevron-down',
            model: false,
             hasChildren:true,
          children: [
            { icon: 'mdi-file-outline', text: 'All Assessments',link:'assesment' },
            { icon: 'mdi-file-outline', text: 'Assessment Type',link:'assesmentType' },
            { icon: 'mdi-head-question-outline', text: 'Question',link:'question' },
          ],
          },
           {
          icon: 'mdi-school-outline',
          'icon-alt': 'mdi-users',
            text: 'Course',
            prepend_icon:'mdi-chevron-down',
            model: false,
             hasChildren:true,
          children: [
            { icon: 'mdi-school-outline', text: 'Courses',link:'course' },
            { icon: 'mdi-text-subject', text: 'Topic',link:'topic' },
            // { icon: 'mdi-people', text: 'Question',link:'question' },
          ],
          },
          { icon: 'mdi-check', text: 'Attendance',link:'attendance' },
          { icon: 'mdi-watermark', text: 'Session',link:'session' },
         
          
          { icon: 'mdi-credit-card-check', text: 'Payment',link:'payment' },
          
           { icon: 'mdi-account-supervisor-outline', text: 'Training',link:'training' }
   
      ],
    }),
    computed:{
        user(){
          return this.$store.state.authmodule.user;
        },
        lender(){
           return this.$store.state.authmodule.lender;
        }
       
    },
    methods:{
        user_menu_action(link){
            if(link == 'logout'){
                this.logout();
            }else{
                 if (this.$route.path !== link){
                    this.$router.push({name:link});
                 }
          }
        },
        goLink(link){
          if (this.$route.name !== link){
            this.$router.push({name:link});
          }
         
        },
        logout(){
            this.$store.dispatch('logout')
        }
    }
  }
</script>
<style >
.profile_icon{
  cursor: pointer;
}
.padme_ho{
  padding:0 20px;
}
.mycontainer{
  width:100% !important;
  max-width:100% !important;
}
.active{
  background-color:#0168f3;
  color:aliceblue;
}
.router-link-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
.router-link-exact-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
.v-list-item--active{
   color: #fff !important;
   background-color:#a8cfda !important;
}
.lender_logo{
   width:100px;
   height:50px;
   max-width:200px;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}
/* .theme--light.v-list-item:(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0, 0, 0, 0.87) !important;
} */
</style>