<template>
  <v-stepper v-model="active" vertical>
    <v-stepper-step :complete="active > 1" step="1">  Enter email </v-stepper-step>
    <v-stepper-content step="1">
        <div class="px-4 py-1" >
            <v-form  id="sign-up-form"  method="post">
                 <v-text-field
                   prepend-inner-icon="email"
                   placeholder=" "
                   name="email"
                   type="email"
                   v-model="email"
                   solo
                   required
                   outlined
                   >
                   </v-text-field>
           </v-form>
           <v-btn color="primary" @click="active = 2" rounded >Send OTP</v-btn>
        </div>
    </v-stepper-content>

    
    <v-stepper-step :complete="active > 2" step="2">Enter OTP</v-stepper-step>
    <v-stepper-content step="2">
        <div class="px-4 py-1" >
            <v-form  id="form-two"  method="post" >
                           <v-text-field
                            prepend-inner-icon=""
                            label=""
                            placeholder=" "
                            type="text"
                            v-model="otp"
                            autocomplete="off"
                            required
                            outlined
                            solo
                            >
                            </v-text-field>   
                            
            </v-form>
            <v-btn color="primary" @click="active = 3" rounded>Confirm</v-btn>
            <v-btn  color="primary" @click="active=1" rounded outlined>Resend OTP</v-btn>
        </div>
    </v-stepper-content>

    <v-stepper-step :complete="active > 3" step="3">Enter Details</v-stepper-step>
    <v-stepper-content step="3">
        <div color="" class="px-4 py-1">  
            <v-form id="form-three"  method="post">
                         
                       <v-text-field
                        prepend-inner-icon="person"
                        label="Name"
                        placeholder="Name "
                        name="name"
                        type="text"
                        v-model="name"
                        autocomplete="off"
                        required
                        outlined
                        solo
                        >
                       </v-text-field>

                        <v-text-field id="password"
                          prepend-inner-icon="lock"
                          v-model="password"
                          :append-icon="show ? 'visibility' : 'visibility_off'"
                          :type="show ? 'text' : 'password'"
                          label="Password"
                          name="password"
                          placeholder="Password"
                          hint="At least 8 characters"
                          autocomplete="off"
                          @click:append="show = !show"
                          outlined
                          dense
                          solo
                          >
                        </v-text-field>
                        <v-text-field id="password"
                          prepend-inner-icon="lock"
                          v-model="confirm_password"
                          :append-icon="show ? 'visibility' : 'visibility_off'"
                          :type="show ? 'text' : 'password'"
                          label="Confirm Password"
                          name="password"
                          placeholder="Confirm Password "
                          hint="At least 8 characters"
                          autocomplete="off"
                          @click:append="show = !show"
                          outlined
                          dense
                          solo
                          
                          >
                        </v-text-field>
      </v-form>

      <v-btn color="primary" @click="active = 1" rounded >sign Up</v-btn>
      <v-btn color="primary" rounded outlined>Cancel</v-btn>
      </div>
    </v-stepper-content>
    </v-stepper>

    
</template>
<script>
  export default {
    data () {
      return {
        active: 1,
        email:'',
        otp:'',
        name:'',
        password:'',
        confirm_password:'',
        
      }
    },
  }
</script>