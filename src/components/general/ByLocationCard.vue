<template>
    <div>
         <v-container>
            <v-card elevation="0" class="section_height">
                <v-card-title  class="top_title">
                    <span class="title">{{title}}</span>

                    <v-spacer></v-spacer>
                    <a @click="seeAll()" class="see_all_link">See all</a>
                    </v-card-title>
                    <section class="property_scroller">
                        <v-col style="padding:8px"
                            v-for="card in properties"
                            :key="card.title"
                            >
                            <v-card width="80px" height="80px" elevation="0">
                                <!-- <v-card-title v-text="card.title"></v-card-title> -->
                                <div :style="{ backgroundImage: 'url(' + card.src + ')' }" class="property_img">
                               
                                </div>
                                <!-- <div> -->
                                    <v-card-title style="padding:5px;margin-top:2px">
                                        <span class="pro_title">Lagos</span>
                                    </v-card-title>
                                  

                            
                                <!-- </div> -->
                            </v-card>
                        </v-col>
                    </section>
                     
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    props:['properties','title','subtitle','seeall'],
    
    methods: {
        seeAll(){
            switch(this.seeall){
                case'recent':
                break;
                case 'recommended':
                break;

            }
        }
    },

}
</script>
<style scoped>
    .section_height{
        height: 150px;
    }
    
    .see_all_link{
        text-decoration: none;
        font-size:10px;
        cursor: pointer;
    }
    .property_scroller{
        background-color: #fff;
        min-width: 100%;
        height: 120px;
        display: flex;
        overflow-x: auto;
        overflow-y:hidden;
    }
    .property_scroller::-webkit-scrollbar {
    display: none;
    }
    .property_img{
    background-size: cover;
    width:100%;
    height: 60px;
    background-position:center; 
    background-repeat: no-repeat;
    border-radius: 5px;
    }
    .property_img_top_btn{
        /* margin:5px 5px; */
        display: flex;
        z-index:1;
    }
    .property_img_top_btn .ma-2{
        color:white !important;
        height: 15px !important;
    }
    .pro_title{
        font-family: Circular Std;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 11px;
    }
    .pro_subtitle{
            padding-top:5px;
        font-family: Circular Std;
        font-style: normal;
        font-weight: normal;
        font-size: 10px !important;
        line-height: 13px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.47);
    }
</style>