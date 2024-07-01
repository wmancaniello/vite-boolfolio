<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";

export default {
  name: "ProjectsPage",
  components: {
    AppCard,
  },
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
    <h1>Projects</h1>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <!-- Card passaggio delle props -->
        <AppCard :project="project" />
        <!-- /Card -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
