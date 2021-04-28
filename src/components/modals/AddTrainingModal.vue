<template>
    <div>
        <v-btn @click="openAddStudentModal()"
                elevation="0"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Training </v-btn>
        <v-row justify="center">
             <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            <v-form ref="studentform" @submit.prevent="submitStudentForm">
                 <v-card>
                <v-card-title>
                <span class="headline">Add Training</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field outlined
                        label="School Session*"
                        required
                        v-model="form.school_session"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Status"
                        required
                          v-model="form.status"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="10"
                        md="12"
                    >
                        <v-text-field outlined
                        label="Training Name"
                          v-model="form.training_name"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Days*"
                         v-model="form.days"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeks*"
                        type="number"
                          v-model="form.weeks"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Hours*"
                        type="number"
                          v-model="form.hours"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-select outlined
                        label="Total Student*"
                        type="number"
                        v-model="form.total_student"
                        :rules="[rules.required]"
                        ></v-select>
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
export default {
    name:"AddStudentModal",
    props:{},
    mixins:[formMixin],
    data(){
        return {
            add_student_modal:false,
            form:{
                school_session:'',
                status:'',
                training_name:'',
                days:'',
                hours:'',
                weeks:'',
                total_student:'', 
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
    }
}
</script>