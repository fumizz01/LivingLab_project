<template>
  <div class="hero-container">
    <HeroSection />
  </div>

  <div class="new-activities">
    <h1>{{ $t('title.new-activities') }}</h1>
  </div>

  <div class="popular-activities-card">
    <SlideActivityCard />
  </div>

  <div class="popular-activities">
    <h1>{{ $t('title.popular-activities') }}</h1>
  </div>

  <div class="popular-activities-card">
    <SlideActivityCard />
  </div>
</template>

<script setup>
import ActivityCard from "../components/SlideActivityCard.vue";
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
  background: linear-gradient(90deg, #4f8cff, #1e40af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 16px #4f8cff, 0 0 32px #1e40af;
  transition: text-shadow 0.3s;
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
    background: linear-gradient(90deg, #4f8cff, #1e40af);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 8px #4f8cff, 0 0 16px #1e40af;
  }
}
</style>
