<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-btn width="100" color="white" @click="leftButtonFunction">
                    {{leftButtonText}}
                </v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn  type="submit" width="100" color="white" @click="rightButtonFunction">
                    {{rightButtonText}}
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name:"ModalFormButton",
    props:{
        leftButtonText:{
            type:String, default:'Cancel'
        },
        rightButtonText:{
            type:String, required:true
        },
        leftButtonFunction:{
            type:Function, required:true
        },
        // rightButtonFunction:{
        //     type:Function, required:true
        // }

    }
}
</script>