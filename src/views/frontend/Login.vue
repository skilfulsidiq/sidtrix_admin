<template>
    <div>
        <v-container >
                <v-row
          align-center
          justify="center"
          fill-height
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-0 mt-10">
            
               <v-card-title class="font-weight-black">
                Welcome back
                </v-card-title>
                  <v-card-subtitle>
                    Login to continue
                    </v-card-subtitle>
                <v-spacer />
              <v-card-text>
                <v-form ref="loginform">
                  <v-text-field outlined
                    label="Email"
                    type="text"
                    ref="email"
                     v-model="login_form.email" name="email"
                     :rules="[rules.required,rules.email]"
                    :error-messages="login_form_errorMessages"            
                  />
                  

                  <v-text-field outlined
                  ref="password"
                    id="password"
                    label="Password"
                    v-model="login_form.password" name="password"  
                    :append-icon="show_pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                    @click:append="() => (show_pass = !show_pass)"
                    :type="show_pass ? 'text' : 'password'"
                    :rules="[rules.required]"

                  />
                  
            
                <div class="forgot-div">
                    <router-link  :to="{name:'forgot'}" class="a_link">Forgot Password ?</router-link>
                </div>
                <div style="margin:15px auto; width:80%"  align-center
          justify="center">
                         <v-btn type="submit" :loading="apiloading" large
      :disabled="apiloading" block color="primary" @click.prevent="login()">Login</v-btn>
    
                </div>
                    </v-form>
               
              </v-card-text>
              <v-card-actions>
                  <div class="mx-auto">
                      <!-- Don't have account? <router-link :tag="a" :to="{name:'register'}" class="a_link"> Sign up</router-link> -->
                  </div>
                
              </v-card-actions>
                    
                
            </v-card>
             
          </v-col>
        </v-row>


          <!-- <pdf src="../../../assets/disney.pdf">PDF</pdf> -->
        </v-container>
        
        
    </div>
</template>
<script>
import {loadingMixin} from '../../mixins/Loading'
import {formMixin} from '../../mixins/form'
export default {
    mixins:[loadingMixin,formMixin],
    data() {
        return {
            show_pass:false,
            login_form:{
                email:'',
                password:''
            },
            login_form_errorMessages:'',
            login_form_hasErrors:false,
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            }
        }
    },
    computed: {
        loginform(){
            return{
                email:this.login_form.email,
                password:this.login_form.password
            }
        }
    },
    methods: {
        login(){
            // if(this.validateForm(this.login_form)){
            //   console.log('dhhdhd  ')
            //   this.$store.dispatch('login',this.login_form).then((res)=>{

            //   })
            //   // this.$router.push({name:'home'})
            // }
            // else{
            //     return ;
            // }
            this.$router.replace('/home')
          },
        
        goForgot(){
            this.$router.push({name:'forgot'})
        }
    },
}
</script>
