<template>
    <div>
         <v-container >
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
                            <v-card width="117px" height="156px" elevation="0">
                                <!-- <v-card-title v-text="card.title"></v-card-title> -->
                                <div :style="{ backgroundImage: 'url(' + card.src + ')' }" class="property_img">
                                    <div class="property_img_top_btn">
                                        <v-chip class="ma-2 status" label >20,000,000</v-chip>
                                        
                                        
                                    </div>
                                </div>
                                <!-- <div> -->
                                    <v-card-title style="padding:5px;margin-top:2px">
                                        <span class="pro_title">4 Bedroom Duplex</span>
                                    </v-card-title>
                                    <v-card-subtitle style="padding:5px;">
                                        <span class="pro_subtitle">Ikeja, lagos</span>
                                    </v-card-subtitle>

                            
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
                    this.$router.push({name:'propertylist',params:{type:'recent'}});
                break;
                case 'recommended':
                 this.$router.push({name:'propertylist',params:{type:'recommended'}});
                break;

            }
        }
    },

}
</script>
<style scoped>
    .section_height{
        height: 230px;
    }
    
    .see_all_link{
        text-decoration: none;
        font-size:10px;
        cursor: pointer;
    }
    .property_scroller{
        background-color: #fff;
        min-width: 100%;
        height: 156px;
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
    height: 110px;
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
        height: 20px !important;
        background-color:blue;
        font-weight:bold;
    }
       .pro_title{
        font-family: Circular Std;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 11px;
    }
    .price{
        font-family: Circular Std;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 11px;
    }
    .pro_subtitle{
            padding-top:5px;
        font-family: Circular Std;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 13px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.47);
    }
</style>