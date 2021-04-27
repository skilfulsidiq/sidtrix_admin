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
               <v-btn @click="openStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Student    </v-btn>
          </v-card-title>
              <v-col cols="12" md="6">
                   <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
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
                            
                            <v-btn icon>   <v-icon color="green"  @click="dialog = !dialog">mdi-pencil</v-icon> </v-btn>
                            <v-btn icon > <v-icon color="red"  @click="Showdialog = !Showdialog">mdi-delete</v-icon> </v-btn>
                    </template>
                </v-data-table>
          </v-card-text>
    </v-card>


      <!-- dialog -->
      <v-row justify="center">
            <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            
            <v-card>
                <v-card-title>
                <span class="headline">Add Student</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field outlined
                        label="First name*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Last name"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="10"
                        md="12"
                    >
                        <v-text-field outlined
                        label="Address"
                        required
                        ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Email*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Password*"
                        type="password"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Phone number*"
                        type="phone number"
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
                        <v-select outlined
                        :items="['Male','Female']"
                        label="Gender*"
                        required
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['Yes','No']"
                        label="Have Laptop*"
                        required
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['Yes','No']"
                        label="Have Internet*"
                        required
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['SSCE','OND','HND','BSc','MSc','Phd']"
                        label="Level Of Education*"
                        required
                        ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete outlined
                        :items="['Frontend', 'Backend', 'Mobile developer', 'Cloud', 'Cloud Engineer', 'Python', 'Babel', 'Java']"
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
          add_student_modal:false,
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
            this.add_student_modal = !this.showStudentModal
        },
    }
}
</script>
<style scoped>
.btn{
    position: absolute;
    right: 0.35rem;
}
</style>
