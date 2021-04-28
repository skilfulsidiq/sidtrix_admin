<template>
    <div>
        <v-btn @click="openAddStudentModal()"
                elevation="2"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Student    </v-btn>
        <v-row justify="center">
             <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            <v-form ref="studentform" @submit.prevent="submitStudentForm">
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
                        v-model="form.first_name"
                        :rules="[rules.required]"
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
                          v-model="form.last_name"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="10"
                        md="12"
                    >
                        <v-text-field outlined
                        label="Address"
                          v-model="form.address"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Email*"
                         v-model="form.email"
                        :rules="[rules.required,rules.email]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Password*"
                        type="password"
                          v-model="form.password"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Phone number*"
                        type="phone number"
                          v-model="form.phone"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        v-model="form.dob"
                        :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['Male','Female']"
                        label="Gender*"
                        v-model="form.gender"
                        :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['Yes','No']"
                        label="Have Laptop*"
                         v-model="form.have_laptop"
                        :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['Yes','No']"
                        label="Have Internet*"
                        v-model="form.have_internet"
                        :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                      <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        :items="['SSCE','OND','HND','BSc','MSc','Phd']"
                        label="Level Of Education*"
                         v-model="form.highest_level_education"
                        :rules="[rules.required]"
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
                          v-model="form.interest"
                        :rules="[rules.countValue]"
                        ></v-autocomplete>
                    </v-col>
                    </v-row>
                </v-container>
                </v-card-text>
                <v-card-actions>
                    <!-- <modal-button
                        :leftButtonFunction='closeModal()'
                         rightButtonText="Submit"
                     /> -->
                <v-btn
                   elevation="2"
                    color="primary"
                    text
                    @click="add_student_modal = false"
                >
                    Cancel
                </v-btn>
                 <v-spacer></v-spacer>
                <v-btn width:200 type="submit"
                    color="primary"
                    elevation="2"
                    text
              
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
           
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import {formMixin} from '@/mixins/form.js'
import EventBus from '@/services/event.js';
export default {
    name:"AddStudentModal",
    props:{},
    mixins:[formMixin],
    data(){
        return {
            add_student_modal:false,
            form:{
                first_name:'',
                last_name:'',
                email:'',
                phone:'',
                address:'',
                gender:'',
                have_laptop:'',
                have_internet:'',
                highest_level_education:'',
                interest:[],
                password:'',
                
            }
        }
    },
    methods:{
        openAddStudentModal(){
            this.add_student_modal =true;
        },
        closeModal(){
            this.add_student_modal=false;
        },
        submitStudentForm(){
            if(!this.$refs.studentform.validate()){
                return;
            }
            console.log(this.form);
        }
    },
    created(){
        EventBus.$on('openStudentModal',(v)=>{
            this.add_student_modal = v;
        })
    }
}
</script>