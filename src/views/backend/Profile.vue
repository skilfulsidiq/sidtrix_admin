<template>
    <div >
       <v-container class="mycontainer">
            <my-loader></my-loader>
         <v-card>
             <v-card-title>
                 Profile
             </v-card-title>
             <v-card-text>
                      <v-row>
               <v-col  sm="12" xs="12"
            md="6" style="border-right:2px solid #f2f2f2">
                <v-form ref="profileform">
                  

                  <v-text-field outlined
                  ref="firstname"
                    id="firstname"
                    label="FirstName"
                    v-model="profile_form.firstname" 
                    name="password" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="profile_form_errorMessages"
                  />

                  <v-text-field outlined
                  ref="lastname"
                    id="lastname"
                    label="LastName"
                    v-model="profile_form.lastname" 
                    name="lastname" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="profile_form_errorMessages"
                  />
                   <v-text-field outlined
                    label="Email"
                    type="text"
                    ref="email"
                     v-model="profile_form.email" name="email"
                     :rules="[rules.required,rules.email]"
                    :error-messages="profile_form_errorMessages"            
                  />
                  <v-text-field outlined
                  ref="phone"
                    id="phone"
                    label="Phone Number"
                    v-model="profile_form.phone" 
                    name="phone" 
                    type="text"
                    :rules="[rules.required]"
                    :error-messages="profile_form_errorMessages"
                  />
                  
            
                <div class="forgot-div">
                </div>
                <div style="margin:8px auto; width:80%"  align-center justify="center">
                         <v-btn type="submit" :loading="apiloading" large :disabled="apiloading" block color="primary" @click.prevent="updateProfile()">Update Profile</v-btn>
    
                </div>
                    </v-form>


               </v-col>
               <v-col sm="12" xs="12"
            md="6">
                        <h3 class="text-bold">Change Password</h3>

                         <v-form ref="passwordform">
                  

                  <v-text-field outlined
                  ref="password"
                    id="password"
                    label="Password"
                    v-model="password_form.password" name="password"  
                    :append-icon="show_pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                    @click:append="() => (show_pass = !show_pass)"
                    :type="show_pass ? 'text' : 'password'"
                    :rules="[rules.required,rules.counter]"

                  />
                  
            
                <div class="forgot-div">
                </div>
                <div style="margin:8px auto; width:80%"  align-center justify="center">
                         <v-btn type="submit" :loading="apiloading" large :disabled="apiloading" block color="primary" @click.prevent="changePassword()">Change Password</v-btn>
    
                </div>
                    </v-form>
               </v-col>
           </v-row>
             </v-card-text>
         </v-card>
       </v-container>
        <success-card :text="success"></success-card>
    </div>
</template>
<script>
import {loadingMixin} from '../../mixins/Loading'
import {formMixin} from '../../mixins/form'
import EventBus from '../../services/event'
export default {
    mixins:[loadingMixin,formMixin],
    data() {
        return {
              show_pass:false,
            password_form:{
                password:''
            },
            password_form_errorMessages:'',
            password_form_hasError:false,
             rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length >= 6 || 'Min 6 characters',
                  email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
               
            },
            profile_form:{
                firstname:'',
                lastname:'',
                email:'',
                phone:''

            },
            profile_form_errorMessages:'',
            profile_form_hasError:false,
            success:''
        }
    },
    computed:{
        passwordform(){
            return{
                password:this.password_form.password
            }
        },
        profileform(){
            return{
                firstname:this.profile_form.firstname,
                lastname:this.profile_form.lastname,
                email:this.profile_form.email,
                phone:this.profile_form.phone
            }
        }
    },
    methods: {
        changePassword(){
              if(this.validateForm(this.password_form)){
                  this.$store.dispatch("changePasswordAction",this.password_form).then((res)=>{
                        this.loadUserDetails();
                        this.success = "Password Updated"
                           EventBus.$emit("show_success",true)
                  });
              }else{return}
        },
        updateProfile(){
              if(this.validateForm(this.profile_form)){
                  this.$store.dispatch("updateProfileAction",this.profile_form).then((res)=>{
                         this.loadUserDetails();
                          this.success = "Profile Updated"
                           EventBus.$emit("show_success",true)
                  });
              }else{return}
        },
        loadUserDetails(){
            let user = this.$store.state.authmodule.user;
            this.profile_form.firstname = user.firstname;
            this.profile_form.lastname = user.lastname;
            this.profile_form.email = user.email;
            this.profile_form.phone = user.phone;
        }
    },
    created() {
        this.loadUserDetails();
    },
}
</script>