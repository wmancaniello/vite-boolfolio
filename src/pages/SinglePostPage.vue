<script>
import axios from "axios";

export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    const slug = this.$route.params.slug;

    axios
      .get(`http://127.0.0.1:8000/api/projects/${slug}`)
      .then((resp) => {
        this.project = resp.data.results;
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  },
};
</script>

<template>
  <div class="container mt-4">
    <div v-if="project !== null">
      <h1>{{ project.title }}</h1>
      <hr />
      <p><strong>Descrizione:</strong> {{ project.description }}</p>
      <hr />
      <p><strong>Categoria:</strong> {{ project.category.name }}</p>
      <hr />
      <p>
        <strong>Tecnologia:</strong>
        <!-- ???
        ??? -->
        <!-- <ul>
            <li v-for="technology in project.results.technologies" :key="technology.id">
                {{ technology.name }}
            </li>
        </ul> -->
        <!-- ???
        ??? -->
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
