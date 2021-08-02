<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { KompasWwwSubmodulesSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  KompasWwwSubmodulesSample,
  // }
});
</script>

<template>
  <div id="app">
    <kompas-www-submodules-sample />
  </div>
</template>
