<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((resp) => {
        this.projects = resp.data;
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-4">Elenco dei progetti</h1>
    <div class="row">
      <div class="col-md-6" v-for="project in projects" :key="project.id">
        <!-- Card -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">
              <small>{{ project.slug }}</small>
            </p>
            <p class="card-text">
              <small>Categoria: {{ project.category_id }}</small>
            </p>
          </div>
        </div>
        <!-- /Card -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
