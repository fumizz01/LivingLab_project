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

  <div class="popular-activities">
    <h1>กิจกรรมมาใหม่</h1>
  </div>
</template>

<script setup>
import ActivityCard from "../components/ActivityCard.vue";
</script>

<style scoped>
.new-activities {
  display: flex;
  font-size: 20px;
  margin: auto;
  padding-top: 3rem;
  padding-left: 10rem;
  padding-bottom: 3rem;
}

.popular-activities-card {
  padding: 16px;
}
</style>
