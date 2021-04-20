<template>
    <div>
        <v-container>
            <v-card elevation="0" class="featured_properties_section" height="261px">
                  <div :style="{ backgroundImage: 'url(' + card.src + ')' }" class="property_img">
                        <div class="property_img_top_btn">
                            <v-chip class="ma-2 status" label  >Completed</v-chip>
                            <!-- <v-chip class="ma-2 hotdeal" label color="red">Hot Deal</v-chip> -->
                            <v-spacer/>
                            
                            <!-- <v-btn icon color="white">
                                <v-icon>mdi-heart</v-icon>
                            </v-btn> -->
                            <v-btn icon color="white">
                                <v-icon>mdi-heart-outline</v-icon>
                            </v-btn>
                            
                        </div>
                    </div>
                    <!-- <v-card-actions> -->
                        <div>
                            
                        <v-card-title style="padding:5px">
                            <span class="subtitle">2 Bedroom Terrace</span>
                             <v-spacer></v-spacer>
                             <span class="title">20,000,000</span>
                        </v-card-title>
                          <v-card-subtitle style="padding:5px">
                          <span class="subtitle">Ikeja, Lagos</span>
                        </v-card-subtitle>
                        <v-card-subtitle style="padding:5px">
                          <span class="feature_subtitle"> <em class="text-bold">2</em>bd.<em>3</em>baths. <em>650</em>sm </span>
                        </v-card-subtitle>
                        <!-- <v-card-title style=""> -->
                            

                        <!-- </v-card-title> -->
                         <!-- <v-card-title style="padding:5px">
                            <span class="subtitle">Ikeja, Lagos</span>

                        </v-card-title> -->
                        
                            
                            
                        </div>
                    <!-- </v-card-actions> -->
                
            </v-card>
        </v-container>
        <seperator></seperator>
    </div>
</template>
<script>
export default {
    props:['card']
}
</script>
<style  scoped>
    .property_img{
    background-size: cover;
    width:100%;
    height: 173.06px;
    background-position:center; 
    background-repeat: no-repeat;
    border-radius: 5px;
}
.property_img_top_btn{
    /* margin:5px 5px; */
    display: flex;
    z-index:10;
}
.property_img_top_btn .ma-2{
    color:white !important;
    height: 25px !important;
}
.property_img_top_btn .status{
    color:white !important;
    height: 25px !important;
    background-color: transparent;
    border:1px solid #fff;
}
.subtitle{
    color: rgba(0, 0, 0, 0.47);
    font-size: 11px;

}
.feature_subtitle{
    color: rgba(0, 0, 0, 0.47);
    font-size: 11px;
}
.feature_subtitle .text-bold{
    font-weight: bold !important;
}
</style>
