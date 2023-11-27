<template>
  <HeaderUser> </HeaderUser>
  <p> {{ this.category }}</p>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import HeaderUser from '@/components/HeaderUser.vue';

export default {
  components: {
    CourseCard,
    HeaderUser
  },

  async created() {
    const category = this.$route.params.category;
    this.category = category;
  },

  async beforeRouteUpdate(to, from, next) {
    const category = to.params.category;
    this.category = category;
    next();
  }
}
</script>

<style></style>