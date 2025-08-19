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
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #ffffff 0%, #4f8cff 50%, #1e40af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 32px #4f8cff, 0 0 64px #1e40af;
  letter-spacing: 0.04em;
  animation: fadeInApple 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInApple {
  0% {
    opacity: 0;
    text-shadow: none;
    transform: translateY(24px) scale(0.98);
  }
  100% {
    opacity: 1;
    text-shadow: 0 4px 32px #4f8cff, 0 0 64px #1e40af;
    transform: translateY(0) scale(1);
  }
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
    background: linear-gradient(90deg, #ffffff 0%, #4f8cff 80%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 16px #4f8cff, 0 0 32px #1e40af;
    animation: fadeInApple 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
