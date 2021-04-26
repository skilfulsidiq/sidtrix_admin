<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <page-title   title="Course Mgt"/>
    <v-card>
          <!-- <v-card-title>
              <v-spacer></v-spacer>
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Course    </v-btn>
          </v-card-title> -->
              <div class="container">
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
                                    label="Course Name*"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    label="Course Duration"
                                    hint="example of helper text only on focus"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Total Topics*"
                                    type="number"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                >
                                    <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Status*"
                                    required
                                    ></v-select>
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
                            <v-btn icon > <v-icon color="green">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>


      <!-- dialog
      <v-row justify="center">
            <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            
            <v-card>
                <v-card-title>
                <span class="headline">Add Course</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Add Course*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Course Duration"
                        hint="1 to 12 weeks"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Total topics*"
                        hint="3 to 12"
                        persistent-hint
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Status*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Password*"
                        type="password"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        required
                        ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete outlined
                        :items="['JAVASCRIPT', 'CSS', 'BOOTSTRAP', 'TAILWIN', 'GIT', 'HTML', 'VUE', 'REACT']"
                        label="Interests"
                        multiple
                        ></v-autocomplete>
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
        </v-row> -->
</div>
      

</template>
<script>
import PageTitle from '../../components/general/PageTitle.vue'
export default {
  components: { PageTitle },
    name:"Courses",
     data () {
      return {
          dialog: false,
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
            text: 'S/N',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Course Name', value: 'course_name' },
          { text: 'Course Instructors', value: 'course_instructor' },
          { text: 'Course Duration', value: 'course_duration' },
          { text: 'Total Topics', value: 'total_topics' },
          { text: 'Status', value: 'status' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: '1',
            course_name:"HTML",
            course_instructor:"Wasmistic",
            course_duration: '5 weeks',
            total_topics: 12,
            status: 'Average',
          },
             {
            name: '2',
            course_name:"CSS",
            course_instructor:"Mr Abdul Azeez",
            course_duration: '5 weeks',
            total_topics: 12,
            status: 'Average',
          },
            {
            name: '3',
            course_name:"BOOTSTRAP",
            course_instructor:"Mr Abdul Azeez",
            course_duration: '5 weeks',
            total_topics: 12,
            status: 'Average',
          },
             {
            name: '4',
            course_name:"JAVASCRIPT",
            course_instructor:"Hundred Percent",
            course_duration: '5 weeks',
            total_topics: 12,
            status: 'Average',
          },
        ],
      }
    },
    methods:{
        openStudentModal(){
            this.add_student_modal = !this.showStudentModal
        },
         openDialog(){
        this.dialog=true
      }
    }
}
</script>

