<template>
    <div>
        <v-container class="mycontainer">
            <v-row>
                <v-col cols="12" md="3">
                    <analytic-card color="success" title="Total Properties" value="45,788" icon="mdi-home-outline"/>
                </v-col>
                 <v-col cols="12" md="3">
                    <analytic-card color="primary" title="Total Properties" value="45,788" icon="mdi-card-text-outline"/>
                </v-col>
                 <v-col cols="12" md="3">
                    <analytic-card color="primary" title="Total Properties" value="45,788" icon="mdi-card-text-outline"/>
                </v-col>
                 <v-col cols="12" md="3">
                    <analytic-card color="purple" title="Total Value" value="45,788" icon="mdi-finance"/>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-col cols="12" md="6">
                    <v-card>
                        <v-card-title></v-card-title>
                        <v-card-text>
                              <bar-chart id="bar"
                            :data="bardata"
                            xkey="year"
                            ykeys='[ "and", "ios", "win" ]'
                            bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]' 
                            grid="true"
                            grid-text-weight="bold"
                            resize="true">
                            </bar-chart>
                        </v-card-text>
                    </v-card>
                  
                </v-col>
            </v-row> -->
       
        </v-container>
    </div>
</template>
<script>
import { loadingMixin} from '@/mixins/Loading'
import {mortgageMixin} from '@/mixins/mortgage'
// import Raphael from 'raphael/raphael'
// global.Raphael = Raphael
// import { DonutChart, BarChart, LineChart, AreaChart } from 'vue-morris'
export default {
    mixins:[mortgageMixin,loadingMixin],
      components: {
            // DonutChart, BarChart, LineChart, AreaChart
        },
    data() {
        return {
            search:'',
            bardata:[
                    { "year": "2013", "and": 10, "ios": 5, "win": 2 },
                    { "year": "2014", "and": 10, "ios": 15, "win": 3 },
                    { "year": "2015", "and": 20, "ios": 25, "win": 2 },
                    { "year": "2016", "and": 30, "ios": 20, "win": 1 },
                    ],
               mortgage_headers:[
                { text: 'Date', value: 'created_at' },
                { text: 'Type', value: 'type' },
                {text: 'Ref No',align: 'left',sortable: false,value: 'app_ref' },
                { text: 'Customer', value: 'firstname' },
                { text: 'Loan Amount', value: 'loan_amount' },
                { text: 'Tenure(Y)', value: 'loan_tenure' },
                 {text:'Action',value: 'action', sortable: false }
                ],
            

        }
    },
    computed: {
        dashboard(){
            return this.$store.state.dashboard_module.dashboard;
        },
      
         user(){
              return this.$store.state.authmodule.user;
            },
    },
    methods: {
   
        loadDashboardInfo(){
            // this.$store.dispatch("dashboardInfoAction");
        }
    },
    created() {
        // this.loadDashboardInfo();
    },
}
</script>
<style  scoped>
    .t_font{
        font-size:20px
    }
</style>