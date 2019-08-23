<template>
  <div class="home">
    <HelloWorld msg=" Good luck"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "other",
  components: {
    HelloWorld
  }
};
</script>
