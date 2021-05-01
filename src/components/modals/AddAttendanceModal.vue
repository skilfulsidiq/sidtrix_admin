<template>
      <div>
        <v-btn @click="openAddStudentModal()"
                elevation="0"
                color="primary"
                > <v-icon>mdi-plus</v-icon> Attendance    </v-btn>
        <v-row justify="center">
             <v-dialog
            v-model="add_student_modal"
            persistent
            max-width="600px"
            >
            <v-form ref="studentform" @submit.prevent="submitStudentForm">
                 <v-card>
                <v-card-title>
                <span class="headline">Add Attendance</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Student Name*"
                        required
                        v-model="form.student_name"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field outlined
                        label="Week_1"
                        required
                          v-model="form.week_1"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="10"
                        md="12"
                    >
                        <v-text-field outlined
                        label="Week 2"
                        v-model="form.week_2"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 3"
                         v-model="form.week_3"
                        :rules="[rules.required,rules.week_3]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Week 4"
                        type="number"
                          v-model="form.week_4"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Week 5"
                        type="number"
                        v-model="form.week_5"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 6"
                         v-model="form.week_6"
                        :rules="[rules.required,rules.week_6]"
                        ></v-text-field>
                    </v-col>
                   <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 7"
                         v-model="form.week_7"
                        :rules="[rules.required,rules.week_7]"
                        ></v-text-field>
                    </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 8"
                         v-model="form.week_8"
                        :rules="[rules.required,rules.week_8]"
                        ></v-text-field>
                    </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 9"
                         v-model="form.week_9"
                        :rules="[rules.required,rules.week_]"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 10"
                         v-model="form.week_10"
                        :rules="[rules.required,rules.week_10]"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 11"
                         v-model="form.week_11"
                        :rules="[rules.required,rules.week_11]"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6">
                        <v-text-field outlined
                        label="Weeek 12"
                         v-model="form.week_12"
                        :rules="[rules.required,rules.week_12]"
                        ></v-text-field>
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
    name:"AddAttendanceModal",
    props:{},
    mixins:[formMixin],
    data(){
        return {
            add_student_modal:false,
            form:{
               student_name:'',
                week_1:'',
                week_2:'',
                week_3:'',
                week_4:'',
                week_5:'',
                week_6:'',
                week_7:'',
                week_8:'',
                week_9:'',
                week_10:'',
                week_11:'',
                week_12:'',
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