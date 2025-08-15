<template>
  <div class="hero-container">
    <HeroSection />
  </div>

  <div class="new-activities">
    <h1>กิจกรรมมาใหม่</h1>
  </div>

  <div class="popular-activities-card">
    <activity-card />
  </div>
</template>

<script setup>
import ActivityCard from "../components/ActivityCard.vue";
</script>

<style scoped>
.new-activities {
  margin: auto;
  padding-top: 16px;
  padding-left: 5rem;
}

.popular-activities-card {
  padding: 16px;
}
</style>
