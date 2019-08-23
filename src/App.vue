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
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
