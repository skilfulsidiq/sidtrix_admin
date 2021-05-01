<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <v-card>
          <v-card-title>
              <page-title   title="Attendance"/>
              <v-spacer></v-spacer>
               <AddAttendanceModal  />
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
                            <v-btn icon > <v-icon color="primary"  @click="openStudentModal">mdi-check</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red"  @click="Showdialog = !Showdialog">mdi-close</v-icon> </v-btn>
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
import AddAttendanceModal from '@/components/modals/AddAttendanceModal.vue'
import EventBus from '@/services/event.js';

export default {
  components: { PageTitle, AddAttendanceModal },
    name:"AttendanceList",
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
          text: 'Attendance',
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
          { text: 'Student Name', value: 'student_name' },
          { text: 'Week 1',  value:"action" },
          { text: 'Week 2',  value:"action" },
          { text: 'Week 3',  value:"action" },
          { text: 'Week 4',  value:"action" },
          { text: 'Week 5',  value:"action" },
          { text: 'Week 6', value:"action" },
          { text: 'Week 7', value:"action" },
          { text: 'Week 8', value:"action" },
          { text: 'Week 9', value:"action" },
          { text: 'Week 10', value:"action" },
          { text: 'Week 11', value:"action" },
          { text: 'Week 12', value:"action" },
          // { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name:'1',
            student_name: 'Tajudeen Sulaimon',
          },
           {
            name: '2',
            student_name: 'Adeola Jimoh',
          },
          {
            name: '3',
            student_name: 'Afolabi Wasiu',
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
