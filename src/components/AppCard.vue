<script>
export default {
  // Aggiungere props per recuperare i dati
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
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
      
      <!-- Details_Show -->
      <router-link :to="'/projects/' + project.slug" class="btn btn-primary"
        >Dettagli</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
