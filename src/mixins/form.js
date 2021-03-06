
export const formMixin ={
   data(){
     return{
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        countValue:value=>value.length>0|| 'select one or more items',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
        },
    }
     }
   },
    methods: {
        resetForm (form) {
            let msg= form+'_errorMessages'
            let err = form+'_hasErrors'
             err = false
             msg =[]
   
           Object.keys(form).forEach(f => {
             this.$refs[f].reset()
           })
         },
         validateForm(form){
            let err = form+'_hasErrors'
            err = false
            Object.keys(form).forEach(f => {
              if (!form[f]) err = true
              this.$refs[f].validate(true)
            })
            // console.log(err)
            if(err){
              return false
            }else{
              return true
            }
          },
    }
 }