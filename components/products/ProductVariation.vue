<template>
  <v-container>
    <v-chip-group active-class="primary--text">
      <v-chip v-for="variation in variations" :key="variation.type">{{ type }}</v-chip>
    </v-chip-group>

    <v-chip-group active-class="primary--text">
      <v-chip v-for="variation in variations" :key="variation.id">{{ variation.name }}</v-chip>
    </v-chip-group>
  </v-container>
</template>
<script>
export default {
  props: {
    type: {
      required: true,
      type: Array
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      default: ""
    }
  },

  computed: {
    selectedVariationId() {
      if (!this.findVariation(this.value.id)) {
        return "";
      }

      return this.value.id;
    }
  },

  methods: {
    changed(event, type) {
      this.$emit("input", this.findVariation(event.target.value));
    },

    findVariation(id) {
      let variation = this.variations.find(v => v.id == id);

      if (typeof variation === "undefined") {
        return null;
      }

      return variation;
    }
  }
};
</script>