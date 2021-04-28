<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <v-card>
          <v-card-title>
              <page-title   title="Students"/>
              <v-spacer></v-spacer>
               <AddStudentModal  />
          </v-card-title>
              <v-col cols="12" md="4">
                   <v-text-field
                v-model="search"
                elevation="0"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
                dense
            ></v-text-field>
              </v-col>
             
          <v-card-text>
             <v-divider></v-divider>
               <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    :items-per-page="5"
                >
                
                    <template v-slot:item.action="{ item }">
                            <v-btn icon > <v-icon color="primary">mdi-check</v-icon> </v-btn>
                            
                            <v-btn icon>   <v-icon color="green"  @click="openStudentModal">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red"  @click="Showdialog = !Showdialog">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>


      <!-- dialog -->
      <v-row justify="center">
            
        </v-row>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card >
            <v-card-text>
              <v-text-field label="Student name"></v-text-field>

              <big class="grey--text"><strong>* Are you sure you want to add.</strong></big>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >
                Add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="Showdialog"
          max-width="500px"
        >
          <v-card >
            <v-card-text>
              <v-text-field label="Student name"></v-text-field>

              <big class="grey--text"><strong>* Are you sure you want to delete.</strong></big>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="Showdialog = false"
              >
                No
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="Showdialog = false"
              >
                yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</div>
      

</template>
<script>
import PageTitle from '../../components/general/PageTitle.vue'
import AddStudentModal from '@/components/modals/AddStudentModal.vue'
import EventBus from '@/services/event.js';

export default {
  components: { PageTitle, AddStudentModal },
    name:"StudentList",
     data () {
      return {
        dialog: false,
        Showdialog: false,
          breadcrumb:[
              {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Students Mgt',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'List',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
          ],
          search:"",
        headers: [
          {
            text: 'S/N',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Full Name', value: 'full_name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone Number', value: 'phone_number' },
          { text: 'Dob', value: 'dob' },
          { text: 'Gender', value: 'gender' },
          { text: 'Education', value: 'education' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: '1',
            full_name: 'Tajudeen Sulaimon',
            email: 'wassuccess@ymail.com',
            phone_number: 8129319138,
            dob: "1/3/1972",
            gender: "male",
            education: "Mst",
          },
           {
            name: '2',
            full_name: 'Adeola Jimoh',
            email: 'wassuccess@ymail.com',
            phone_number: 8129319138,
            dob: "3/5/1982",
            gender: "male",
            education: "Mst",
          },
          {
            name: '3',
            full_name: 'Afolabi Wasiu',
            email: 'wassuccess@ymail.com',
            phone_number: 8129319138,
            dob: "5/2/1991",
            gender: "male",
            education: "Mst",
          },
        ],
      }
    },
    methods:{
      openStudentModal(){
        EventBus.$emit('openStudentModal',true);
      }
    }
}
</script>
<style scoped>
.btn{
    position: absolute;
    right: 0.35rem;
}
</style>
