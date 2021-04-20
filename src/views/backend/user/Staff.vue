<template>
    <div>
         <v-container class="mycontainer">
            <v-card>
         <my-loader></my-loader>
        <v-card-title>
            All Staff
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
          
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
            <v-btn color="primary" @click="showAddNewStaffForm()"><v-icon>mdi-add-account-outline</v-icon> Add Staff</v-btn>
        </v-card-title>
        <v-card-text>
             <div class="m-t-25 ">
                     <v-data-table
                        :headers="headers"
                        :items="staff"
                        :items-per-page="5"
                        :search=search
                        class="elevation-1"
                    >
                            <template v-slot:item.firstname="{ item }">
                                    {{item.firstname}} {{item.lastname}}
                            </template>
                             <template v-slot:item.is_superadmin="{ item }">
                                    {{item.is_superadmin == 1?'Admin Access':'Staff Access'}}
                            </template>
                            
                              <template v-slot:item.action="{ item }">
                               

                                    <!-- <v-btn color="primary" dark>{{item.id}}</v-btn> -->
                            <v-icon  medium class="mr-2" @click="editStaff(item)">mdi-account-edit-outline
                            </v-icon>
                             <v-icon  medium class="mr-2" @click="viewStaffApplication(item.slug)">mdi-file-multiple-outline
                            </v-icon>
                            </template>
                    </v-data-table>
                     </div>
        </v-card-text>
    </v-card>
    </v-container>
    <v-dialog v-model="formdialog" persistent max-width="400">
        <v-card>
            <v-card-title class=""> {{editing?'Edit '+staff_form.firstname:'Add Staff'}}</v-card-title>
            <v-form ref="staffform">
                <v-container>
                  <v-text-field outlined
                  ref="firstname"
                    id="firstname"
                    label="FirstName"
                    v-model="staff_form.firstname" 
                    name="password" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="staff_form_errorMessages"
                  />

                  <v-text-field outlined
                  ref="lastname"
                    id="lastname"
                    label="LastName"
                    v-model="staff_form.lastname" 
                    name="lastname" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="staff_form_errorMessages"
                  />
                   <v-text-field outlined
                    label="Email"
                    type="text"
                    ref="email"
                     v-model="staff_form.email" name="email"
                     :rules="[rules.required,rules.email]"
                    :error-messages="staff_form_errorMessages"            
                  />
                  <v-text-field outlined
                  ref="phone"
                    id="phone"
                    label="Phone Number"
                    v-model="staff_form.phone" 
                    name="phone" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="staff_form_errorMessages"/>
                  <v-text-field outlined
                  ref="position"
                    id="position"
                    label="Position"
                    v-model="staff_form.position" 
                    name="position" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="staff_form_errorMessages"
                  />
                  
                  <v-text-field outlined v-if="editing"
                    ref="password"
                    id="password"
                    label="Password"
                    v-model="staff_form.password" name="password"  
                    :append-icon="show_pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                    @click:append="() => (show_pass = !show_pass)"
                    :type="show_pass ? 'text' : 'password'"

                  />
                  <v-card-actions>
                        <v-btn color="green darken-1" text @click="closeFormDialog()">  Close</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" :loading="apiloading" large :disabled="apiloading" color="primary" @click.prevent="editing?updateStaff():addNewStaff()">{{editing?'Update':'Add'}}</v-btn>
                  </v-card-actions>
             
                </v-container>
                </v-form>
                
        </v-card>
    </v-dialog>
    <success-card :text="success"></success-card>
    </div>
</template>
<script>
import {loadingMixin} from '../../../mixins/Loading'
import {formMixin} from '../../../mixins/form'
import EventBus from '../../../services/event'
export default {
      mixins:[loadingMixin,formMixin],
          
        data(){
            return{
                    search:'',
                    show_pass:false,
                    success:'',
                    formdialog:false,
                    headers:[
                    { text: 'Position', value: 'position' },
                    { text: 'Full Name', value: 'firstname' },
                    { text: 'Email', value: 'email' },
                    { text: 'Phone', value: 'phone' },
                    { text: 'Last Login', value: 'last_login_at' },
                    { text: 'Admin Access', value: 'is_superadmin' },
                
                    {text:'Action',value: 'action', sortable: false }
                    ],
                    staff_form:{
                    firstname:'',
                    lastname:'',
                    email:'',
                    phone:'',
                    password:'',
                    position:''

                },
                slug : '',
                staff_form_errorMessages:'',
                staff_form_hasError:false,
                editing:false,
                rules: {
                    required: value => !!value || 'Required.',
                    counter: value => value.length >= 6 || 'Min 6 characters',
                    email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
               
            },
            }
        },
        computed: {
            staff(){
                let p = this.$store.state.staff_module.staff;
                if(p.length>0){
                    return p;
                }
                return []
            },
            staffform(){
                return{
                    firstname:this.staff_form.firstname,
                    lastname:this.staff_form.lastname,
                    email:this.staff_form.email,
                    phone:this.staff_form.phone,
                    position:this.staff_form.position,
                    password:this.staff_form.password
                }
            }
        
        
        },
        methods: {
            getAllStaff(){
                this.$store.dispatch("allStaffListAction")
            },
            editStaff(item){
                this.editing =true;
                this.formdialog = true;
                this.staff_form = item;
                this.slug = item.slug
            },
            showAddNewStaffForm(){
                //  this.resetForm(this.staff_form);
                 this.editing = false;
                 this.formdialog = true;
                
            },
            closeFormDialog(){
                if(this.editing){
                }else{
                    this.resetForm(this.staff_form);
                    this.editing = false;
                }
                
                 this.formdialog = false;
                //   
            },
            addNewStaff(){
               
                 if (this.validateForm(this.staff_form)) {
                     this.$store.dispatch("addStaffAction",this.staff_form).then((res)=>{
                         this.success = "Staff Added successfully";

                         this.formdialog = false;
                         EventBus.$emit("show_success",true)
                         this.resetForm(this.staff_form)
                         this.getAllStaff();
                     })
                 }else{return}
            },
            updateStaff(){
                let data = {form:this.staff,slug:this.slug}
                if (this.validateForm(this.staff_form)) {
                       this.$store.dispatch("updateStaffAction",data).then((res)=>{
                         this.success = "Staff Added successfully";

                         this.formdialog = false;
                         EventBus.$emit("show_success",true)
                         this.resetForm(this.staff_form)
                     })
                }else{return}
            },
         
            viewStaffApplication(slug){
                // let staffid = item.lender_user_id;
                if(slug !=null || slug !=''){
                    this.$store.dispatch("currentStaffAction",slug);
                    // return;
                    this.$router.push({name:'staff-assigned-mortgage',params:{slug:slug}});
                }
            }
        },
        created() {
            this.getAllStaff();
        },
}
</script>