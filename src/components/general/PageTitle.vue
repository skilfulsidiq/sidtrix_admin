<template>
    <div>
         <v-card elevation="0" class="featured_properties_section">
                <v-card-title  class="top_title">
                    <span class="title">{{title}}</span>

                    <v-spacer></v-spacer>
                    <v-icon v-if="icon">{{icon}}</v-icon>
                    </v-card-title>
            </v-card>
    </div>
</template>
<script>
export default {
    props:['title','icon','left_link']
}
</script>