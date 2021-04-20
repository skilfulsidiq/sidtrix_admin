
import EventBus from '../services/event'
export const mortgageMixin ={
    data(){
        return{
            show_detail:false,
            detailDialog:false,
            mortgagedetails:{},
            activePage:'List'
        }
    },
  
    methods: {
        showDetailPage(slug){
            // EventBus.$emit("show",false)
            //  EventBus.$emit('show_regular',true);
            this.$store.dispatch("mortgageDetailAction",slug);
            // this.mortgagedetails = item;
            this.$router.push({name:'mortgage_detail',params:{slug:slug}});
        },
             showListPage(){
             EventBus.$emit('show_regular',false);
            this.mortgagedetails = '';
        },
       
    },

    created() {
         EventBus.$on("show_regular",(t)=>{
            this.show_detail = t;
        })
    }
   
 }