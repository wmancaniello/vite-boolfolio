<script>
export default {
  name: "Header",
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about-us">About us</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
