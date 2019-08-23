<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <NavLink :active="isActive" :href="href" @click="navigate">Algorithms</NavLink>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="'other'" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <NavLink :active="isActive" :href="href" @click="navigate">Other</NavLink>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style>

</style>
