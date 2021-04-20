<template>
  <div>
    <v-card class="mx-auto" max-width="344">
        <my-loader />
      <v-list-item two-line>
        <v-list-item-avatar tile size="80" :color="color">
          <v-icon size="50" color="white">{{icon}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="overline mb-4">{{title}}</div>
          <v-list-item-title class="headline mb-1">{{value}}</v-list-item-title>
          <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
import { loadingMixin } from "../../mixins/Loading";
export default {
  mixins: [loadingMixin],
  props: ["icon", "title", "value", "color"]
};
</script>