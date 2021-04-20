<template>
  <div>

    <v-container>
      
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            
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