<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <v-card>
          <v-card-title>
             <page-title   title="Question"/>
              <v-spacer></v-spacer>
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Question</v-btn>
          </v-card-title>
              <v-col cols="12" md="4">
                   <v-text-field
                v-model="search"
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
                            <v-btn icon > <v-icon color="green"  @click="dialog = !dialog">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red"  @click="Showdialog = !Showdialog">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>
    
      <v-row justify="center">
            <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            
            <v-card>
                <v-card-title>
                <span class="headline">Question Form</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Question*"
                        required
                        ></v-text-field>
                    </v-col>
                   
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['1', '2', '3', '4']"
                        label="Number Of Options*"
                        required
                        ></v-select>
                    </v-col>
                    <v-container fluid>
                        <p>{{ radios || 'null' }}</p>
                        <v-radio-group
                        v-model="radios"
                        mandatory
                        >
                        <v-radio
                            label="Radio 1"
                            value="radio-1"
                        ></v-radio>
                        <v-radio
                            label="Radio 2"
                            value="radio-2"
                        ></v-radio>
                        <v-radio
                            label="Radio 3"
                            value="radio-3"
                        ></v-radio>
                        <v-radio
                            label="Radio 4"
                            value="radio-4"
                        ></v-radio>
                        </v-radio-group>
                    </v-container>
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
              <v-text-field label="Question number"></v-text-field>

              <small class="primary--text">* Are you sure you want to add.</small>
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
              <v-text-field label="Question number"></v-text-field>

              <small class="primary--text">* Are you sure you want to delete.</small>
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
    name:"Question",
     data () {
      return {
           dialog: false,
            Showdialog: false,
          radios: null,
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
