<template>
  <div class="hero-container">
    <HeroSection />
  </div>

  <div class="new-activities">
    <h1>{{ t('index.newActivities') }}</h1>
  </div>

  <div class="popular-activities-card">
    <SlideActivityCard />
  </div>

  <div class="popular-activities">
    <h1>{{ t('index.popularActivities') }}</h1>
  </div>

  <div class="popular-activities-card">
    <SlideActivityCard />
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

.popular-activities {
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

.new-activities h1,
.popular-activities h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

@media (max-width: 1028px) {
  .new-activities {
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .popular-activities {
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .new-activities h1,
  .popular-activities h1 {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
