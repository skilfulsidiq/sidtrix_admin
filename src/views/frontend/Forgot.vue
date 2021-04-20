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
                   Forgot Your password
                </v-card-title>
                  <v-card-subtitle>
                    Enter your Login Email
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
                  
                <div style="margin:10px auto; width:80%"  align-center justify="center">
                         <v-btn type="submit" :loading="apiloading" large :disabled="apiloading" block color="primary" @click.prevent="resetPassword()">Reset Password</v-btn>
                            
                     <!-- <router-link  :to="{name:'login'}" class="a_link">Login</router-link> -->
                </div>
                <div style="margin:20px auto; width:60%"  align-center justify="center"> 
                    <v-btn @click.prevent="goBack()" block color="primary" style="margin:10px auto; width:80%"  outlined align-center justify="center">Back</v-btn>
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
               login_form:{
                email:''
            },
            login_form_errorMessages:'',
            login_form_hasErrors:false,
            rules: {
                required: value => !!value || 'Required',
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
                email:this.login_form.email
            }
        }
    },
    methods:{
        resetPassword(){

        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>