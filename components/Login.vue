<template>
     <v-dialog v-model="dialog"  max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn rounded color="primary" dark v-on="on">Login</v-btn>
        </template>
        <template>
           <v-tabs
              v-model="active"
              color="primary"
              
              slider-color="deepPurple"
              grow
           >
             <v-tab
              v-for="n in logins"
              :key="n"
              ripple
              >
              {{n}}

              </v-tab>
                 <v-tab-item >
                   <v-container>
                    
                     <v-row>
                       <v-col class="d-flex justify-center" md="8" offset-md="2">
                         
	                     <v-form @submit.prevent="checkLogin" id="login-form"  method="post">
                         
                        <v-text-field
                        prepend-icon="person"
                        label="Email ID"
                        placeholder=" "
                        name="email"
                        type="email"
                        v-model="email"
                        autocomplete="off"
                        required
                        outline
                        >
                       </v-text-field>
                        <v-text-field id="password"
                          prepend-icon="lock"
                          v-model="password"
                          :append-icon="show ? 'visibility' : 'visibility_off'"
                          :type="show ? 'text' : 'password'"
                          label="Password"
                          name="password"
                          placeholder=" "
                          hint="At least 8 characters"
                          autocomplete="off"
                          @click:append="show = !show"
                          outline
                          >
                        </v-text-field>

                       
                         <div class="d-flex justify-center"> 
                         <v-btn color="primary" rounded outlined type="submit" class="mt-4">LogIn</v-btn>
                         </div>

                         <br><hr><br>

                        <div class="d-flex justify-center">

                          
                         	<v-btn color="blue" class="white--text mr-3">
    facebook<v-icon right>mdi-facebook</v-icon>
    </v-btn>   
                         OR
                         	<v-btn color="red" class="white--text ml-3" >
      google<v-icon right>mdi-google</v-icon>
    </v-btn>
                        </div>

                      </v-form>
                       </v-col>
                     </v-row>

                     <br> <hr><br>
                     <v-row justify="space-around">
                      <nuxt-link to="#"  class="  font-weight-light text-xs-center">Create an account</nuxt-link>
                      
                      <nuxt-link to="#"  class="  font-weight-light text-xs-center">Forgot Password?</nuxt-link>
                     </v-row>
                     
                    </v-container>
                  </v-tab-item>
                  <v-tab-item>
                   <signup />
                  <div class="title font-weight-light text-sm-center"> <a href="#">     New to Butique ? Create an account </a></div>
                  </v-tab-item>
              </v-tabs>
           </template>
      </v-dialog>
</template>

<script>
import signup from "@/components/signup"

export default {
  components:{
    signup

  },
    data() {
	  	return {

		  	dialog:false,
      	email: '',
		   	password: '',
				show: false,
		   	rules: {
				required: v => !!v || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
				emailValid : v=> /.+@.+/.test(v) || 'E-mail must be valid'
			},
        checkbox: false,
        logins:[ 'Sign In', 'Sign Up' ]

		}
	}
}
</script>

<style>

</style>
