<template>
  <v-app id="inspire">
    
    
    <v-main style="padding-left:0px">
        <div class="d-flex justify-center flex-row mt-5">
            <div class="logo" style="background-image:url('../../assets/logo.png')"></div>
            <!-- <v-img src="@/assets/logo.png" max-height="50" max-width="100"></v-img> -->
      </div>
      <v-container
              >
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer>
      Sidtrix
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>
<script>
export default {
     data: () => ({
      dialog: false,
      drawer: null,
      sampe_img_link:'https://www.google.com/search?biw=1600&bih=718&tbm=isch&sxsrf=ACYBGNSiTf7T5CMkwbDOiLQbKcH6KQluyA%3A1579861007453&sa=1&ei=D8QqXoOpG6TuxgOHg5HICQ&q=firsttrust+logo+mortgage#',
       links: [
        'Home',
        'Categories',
        'Products',
        'Profile',
      ],
        menu: [
        { title: 'Home',icon:'mdi-account',link:'profile' },
        { title: 'Products',icon:'mdi-logout',link:'logout' },
        { title: 'Products',icon:'mdi-logout',link:'logout' },
      ],
      navigation_menu: [
        { icon: 'mdi-home', text: 'Dashboard',link:'home' },
        // { icon: 'mdi-box', text: 'Mortgages' ,link:'mortgage'},
        // { icon: 'mdi-content-copy', text: 'Duplicates',link:'do' },
         {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-file-multiple-outline',
          text: 'Mortgages',
          model: false,
          children: [
            { icon: 'mdi-file-outline', text: 'Regular',link:'regular_mortgage' },
            { icon: 'mdi-file-outline', text: 'NHF',link:'nhf_mortgage' },
          ],
        },
         { icon: 'mdi-account-group', text: 'Staff',link:'staff' },
   
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
  .logo{
    width:100px;
    height: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>