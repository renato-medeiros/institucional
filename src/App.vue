<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
import { components } from 'aws-amplify-vue'
export default {
  name: 'app', 
  components: {
    ...components
  }
};
</script>
