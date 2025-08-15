<template>
    
  components: { ActivityCard },<div class="hero-container">
        <HeroSection />
    </div>

    <div class = "new-activities">
        <h1>กิจกรรมมาใหม่</h1>
    </div>

    <div class="popular-activities-card">
        <activity-card />
    </div>


</template>

<script setup>
import ActivityCard from '../components/ActivityCard.vue';


</script>

<style scoped>

</style>