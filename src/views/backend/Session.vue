<template>
<div>
     <v-breadcrumbs
      :items="breadcrumb"
      divider="-"
    ></v-breadcrumbs>
    <page-title   title="Session"/>
    <v-card>
          <v-card-title>
              <v-spacer></v-spacer>
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Session    </v-btn>
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
        </v-row>
         <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card >
            <v-card-text>
              <v-text-field label="Student name"></v-text-field>

              <small class="grey--text">* Are you sure you want to add.</small>
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

              <small class="grey--text">* Are you sure you want to delete.</small>
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
    name:"Session",
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
          text: 'Session',
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
          { text: 'Session Name', value: 'session_name' },
          { text: 'Year', value: 'year' },
          { text: 'Batch', value: 'batch' },
          { text: 'Status', value: 'status' },
          { text: 'Action',value:"action" },
        ],
        desserts: [
          {
            name: '1',
            session_name: 'Frontend',
            year: 2021,
            batch: 'First',
            status: 'Average',
          },
             {
            name: '1',
            session_name: 'Frontend',
            year: 2021,
            batch: 'First',
            status: 'Average',
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
