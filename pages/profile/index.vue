<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-toolbar flat>
          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider />
        <v-vol>
          <v-sheet>
            <v-row>
              <v-col cols="3">
                <v-subheader>Account Dashboard</v-subheader>
                <ProfileList />
              </v-col>
              <v-col cols="9">
                <v-card flat>
                  <v-card-title>Profile Details</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-vol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileList from "@/components/profile/ProfileList";
export default {
  middleware: ["auth"],
  components: { ProfileList }
};
</script>

<style>
</style>