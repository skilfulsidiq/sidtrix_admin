<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <page-title   title="Training"/>
    <v-card>
          <v-card-title>
              <v-spacer></v-spacer>
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Training    </v-btn>
          </v-card-title>
              <v-col cols="12" md="6">
                   <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
              </v-col>
             
          <v-card-text>
               <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    :items-per-page="5"
                >
                
                    <template v-slot:item.action="{ item }">
                            <v-btn icon > <v-icon color="primary">mdi-check</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="green" @click="dialog = !dialog">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red" @click="Showdialog = !Showdialog">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>


      dialog
      <v-row justify="center">
            <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            
            <v-card>
                <v-card-title>
                <span class="headline">Training Form</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                       <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        :items="['Active', 'Inactive']"
                        label="School Session"
                        required
                        ></v-text-field>
                    </v-col>
                       <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        :items="['Active', 'Inactive']"
                        label="Status"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                       <v-text-field outlined
                       
                        label="Training Name*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                       <v-text-field outlined
                       type="number"
                        label="Days*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                       <v-text-field outlined
                       type="number"
                        label="Weeks*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                       <v-text-field outlined
                       type="number"
                        label="Hours*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                       <v-text-field outlined
                       type="number"
                        label="Total Students*"
                        required
                        ></v-text-field>
                    </v-col>
                    </v-row>
                </v-container>
                </v-card-text>
                <v-card-actions>
                <v-btn
                   elevation="2"
                    color="primary"
                    text
                    @click="add_student_modal = false"
                >
                    Cancel
                </v-btn>
                 <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    elevation="2"
                    text
                    @click="add_student_modal = false"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
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
export default {
  components: { PageTitle },
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
          text: 'Course Mgt',
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
            text: 'Training Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Year', value: 'year' },
          { text: 'Total Days', value: 'total_days'},
          { text: 'Total Weeks', value: 'total_weeks' },
          { text: 'Total Hours', value: 'total_hours' },
          { text: 'Total Students', value: 'total_students' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: 'Aremu',
            year: 2020,
            total_days: 80,
            total_weeks: 12,
            total_hours: 4,
            total_students:3,
          },
             {
            name: 'Idris',
            year: 2021,
            total_days: 40,
            total_weeks: 12,
            total_hours: 8,
            total_students:3,
          },
            {
            name: 'Ishola',
            year: 2019,
            total_days: 20,
            total_weeks: 12,
            total_hours: 6,
            total_students:2,
          },
             {
            name: 'Jimoh',
            year: 2021,
            total_days: 50,
            total_weeks: 12,
            total_hours: 5,
            total_students:3,
          },
        ],
      }
    },
    methods:{
        openStudentModal(){
            this.add_student_modal = !this.showStudentModal
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
