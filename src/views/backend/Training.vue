<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <v-card>
          <v-card-title>
             <page-title   title="Training"/>
              <v-spacer></v-spacer>
               <AddTrainingModal />
          </v-card-title>
              <v-col cols="12" md="4">
                   <v-text-field
                outlined
                dense
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
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
                            <v-btn icon > <v-icon color="green" @click="openStudentModal">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red" @click="Showdialog = !Showdialog">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>

      
            
            
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
import AddTrainingModal from '@/components/modals/AddTrainingModal.vue'
export default {
   components: { PageTitle, AddTrainingModal },
  
    name:"Training",
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
          text: 'Training',
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
          add_student_modal:false,
        headers: [
          {
            text: 'S/N',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'School Session', value: 'school_session' },
          { text: 'Training Name', value: 'training_name' },
          { text: 'Days', value: 'days' },
          { text: 'Weeks', value: 'weeks' },
          { text: 'Hours', value: 'hours' },
          { text: 'Total Student', value: 'total_student' },
          { text: 'Status', value: 'status' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: '1',
            school_session: 2021,
            training_name: "Frontend",
            days: 80,
            weeks: 12,
            hours: 4,
            total_student:3,
            status: "Average",
          },
             {
            name: '2',
            school_session: 2021,
            training_name: "Frontend",
            days: 80,
            weeks: 12,
            hours: 4,
            total_student:3,
            status: "Average",
          },
            {
            name: '3',
            school_session: 2021,
            training_name: "Frontend",
            days: 80,
            weeks: 12,
            hours: 4,
            total_student:3,
            status: "Average",
          },
             {
            name: '4',
            school_session: 2021,
            training_name: "Frontend",
            days: 80,
            weeks: 12,
            hours: 4,
            total_student:3,
            status: "Average",
          },
        ],
      }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.btn{
    position: absolute;
    right: 0.35rem;
}
</style>
