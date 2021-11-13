<template lang="">
  <div>
    <h2 class="text-2xl">Welcome {{ data.name }}</h2>
  </div>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      data: {
        name: 'to Project',
      },
    };
  },
};
</script>
<style lang=""></style>
