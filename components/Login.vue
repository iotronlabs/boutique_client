<template>
     <v-dialog v-model="dialog"  max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Login</v-btn>
        </template>
        <template>
           <v-tabs
              v-model="active"
              color="primary"
              light
              slider-color="yellow"
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
                   <v-card>
                    <v-card-text>
                     <div>
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
                          name="password"
                          label="Password"
                          placeholder=" "
                          hint="At least 8 characters"
                          autocomplete="off"
                          @click:append="show = !show"
                          outline
                          >
                        </v-text-field>

                         <v-checkbox
                           v-model="checkbox"
                           label="Remember Me"
                         ></v-checkbox>
                         <div   class="title font-weight-medium text-xs-center">
                         <v-btn color="success" type="submit" left>LogIn</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                          or
                         <v-btn color="primary"	type="" >Request OTP</v-btn>
                         </div>
                         <br><hr><br>
                         <div  class="title font-weight-thin text-xs-center">login via</div>

                      </v-form>
                    </div>

                     <br> <hr><br>
                     <a href="#"  class="  font-weight-light text-xs-center">     New to Butique ? Create an account  </a>
                    </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    signup page
                  <div class="title font-weight-light text-sm-center"> <a href="#">     New to Butique ? Create an account </a></div>
                  </v-tab-item>
              </v-tabs>
           </template>
      </v-dialog>
</template>

<script>

export default {
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
