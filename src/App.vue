<template>
    <div >
      <component :is="layout"></component>
    </div>
</template>

<script>
const frontend = 'frontend'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    layout(){
      return (this.$route.meta.layout || frontend)+'-layout'
    }
  }
};
</script>
<style >
/* @import url("/assets/css/atlantis.min.css"); */
/* @import url("./assets/css/nh.css"); */

.a_link{
    cursor: pointer;
    text-decoration: none ;
}
/* .router-link-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
.router-link-exact-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
} */
/* .theme--light {
    background: #0168fa !important;
    color: rgba(0, 0, 0, 0.87);
} */
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0, 0, 0, 0.87) !important;
}

.mycontainer{
  width:100% !important;
}
</style>
