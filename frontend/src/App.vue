<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info shadow">
      <div class="container">
        <router-link class="navbar-brand col-sm-3 col-md-2" :to="{name: 'Home'}">
          <i class="fas fa-graduation-cap"></i>
          Digitális témahét
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name: 'CommentList'}">Comments</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">

        <main role="main" class="col">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  :root {
    --header-height: 60px;
  }
  .navbar {
    height: var(--header-height);
  }
  a,
  a:hover {
    color: var(--info);
  }
</style>
