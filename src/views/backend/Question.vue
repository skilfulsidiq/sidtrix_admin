<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <page-title   title="Question"/>
    <v-card>
          <!-- <v-card-title>
              <v-spacer></v-spacer>
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Course    </v-btn>
          </v-card-title> -->
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
    name:"Question",
     data () {
      return {
          breadcrumb:[
              {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Question',
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
          { text: 'Assesment', value: 'assesment' },
          { text: 'Course', value: 'Course' },
          { text: 'Topic', value: 'topic' },
          { text: 'Question Type', value: 'question_type' },
          { text: 'Question Text', value: 'question_text' },
          { text: 'Number of Option', value: 'number_option' },
          { text: 'Question Time', value: 'question_time' },
          { text: 'Pass Score', value: 'pass_score' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: '1',
            assesment: 'Tag',
            course: 'HTML',
            topic: 'page structure',
            question_type: 'Project card',
            question_text: '5',
            number_option: 2,
            question_time:'3 hours',
            pass_score:'50%',
          },
             {
            name: '2',
            assesment: 'Card',
            course: 'CSS',
            topic: 'page structure',
            question_type: 'Project card Color',
            question_text: '5',
            number_option: 2,
            question_time:'3 hours',
            pass_score:'80%',
          },
            {
            name: '3',
            assesment: 'Array',
            course: 'JAVASCRIPT',
            topic: 'page structure',
            question_type: 'Project card',
            question_text: '5',
            number_option: 2,
            question_time:'3 hours',
            pass_score:'50%',
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
