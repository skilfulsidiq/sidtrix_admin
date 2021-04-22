 <template>
 <div class="container">
   <v-card>
     <v-card-title>
       <v-spacer></v-spacer>
          <v-btn
          color="primary"
          elevation="2"
          @click="openDialog()"
        >
          <v-icon>mdi-plus</v-icon>Open Dialog
        </v-btn>
     </v-card-title>
     <v-col cols="12" md="6">
       <!-- <v-text-field
       append-icon="mdi-magnify"
       hide-details
       ></v-text-field> -->
     </v-col>
   </v-card>


   <!----------dialog--------------->
      <v-row justify="center">
    <v-dialog 
      v-model="dialog"
      persistent
      width="800px"
    >
    <v-card>
      <v-card-title>
        <span class="headline">Open Dialog</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
      </v-card-actions>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col 
            cols="12"
            md="6">
                <v-text-field
                  label="First Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Last Name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="number*"
                  type="tel"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['SSCE', 'OND', 'HND or BSc', 'MSc']"
                  label="Highest Level Of Education*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Male', 'Female']"
                  label="Gender*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Address"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</div>    
</template>
<script>
  export default {
    name: "StudentList",
     data: () => ({
      dialog: false,
    }),
    methods:{
      openDialog(){
        this.dialog=true
      }
      
    }
}

</script>

