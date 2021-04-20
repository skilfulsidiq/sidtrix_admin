<template>
    <div>
        <v-container>
             <div class="outter">
                <div class="property_img" :style="{ backgroundImage: 'url(' + card.src + ')' }"></div>
                <div class="property_info">
                    <div style="width:150px;margin-left:5px">
                            <v-card-title style="padding:5px;margin-top:2px">
                                <span class="pro_title2">4 Bedroom Duplex</span>
                            </v-card-title>
                            <v-card-subtitle style="padding:5px;">
                                <span class="pro_subtitle">Ikeja, lagos</span>
                            </v-card-subtitle>
                            <seperator/>
                               <v-card-subtitle style="padding:5px;">
                                <span class="pro_subtitle"> 2 bd .3bth .655sm</span>
                            </v-card-subtitle>
                              <seperator/>
                    </div>

                    
                         <v-card-title style="padding:0.5px;">
                                <span class="price">20,000,0000</span>
                                <v-spacer></v-spacer>
                                <div class="offer_number">
                                    <v-card-subtitle style="padding:0.5px;">
                                            <span style="fomt-size:7px" class="pro_subtitle">Offers</span>
                                    </v-card-subtitle>
                                    <v-chip  class=" n-chip" color="primary" label>10</v-chip>
                                </div>

                             
                            </v-card-title>
                
                     
                        
                </div>
                    
            </div>
        </v-container>
       
    </div>
</template>
<script>
export default {
    props:['card']
}
</script>
<style scoped>
    .outter{
        width:100%;
        padding:10px;
        height: 140px;
        border: 1px solid #F2F2F2;
        box-sizing: border-box;
        border-radius: 5px;
        display:flex;
    }
    .property_img{
        background-size: cover;
        width:120px;
        height: 120px;
        background-position:center; 
        background-repeat: no-repeat;
        border-radius: 5px;
    }
    .property_info{
        margin:0 5px;
        width:65%;
    }
     .pro_title2{
        font-family: Circular Std;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
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
        font-size: 12px;
        line-height: 13px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.47);
    }
    .n-chip{
        height:30px;
    }
</style>