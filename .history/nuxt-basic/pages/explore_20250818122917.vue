<template>
  <div class="explore-page">
    <!-- Filter Bar -->
    <div class="explore-filter-bar">
      <select class="explore-select">
        <option>Area...</option>
        <option>Location M1</option>
        <option>Location M2</option>
      </select>
      <select class="explore-select">
        <option>Group...</option>
        <option>Science</option>
        <option>Art</option>
      </select>
      <button class="explore-btn">ค้นหา</button>
      <button class="explore-btn blue">ค้นหา activity</button>
    </div>

    <!-- Result Count -->
    <div class="explore-result-count">
      Showing 9 of 379 กิจกรรม
    </div>

    <!-- Card Grid -->
    <div class="explore-card-grid">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        
    </div>

    <!-- Pagination -->
    <div class="explore-pagination">
      <button class="explore-page-btn">&lt;</button>
      <button v-for="page in 5" :key="page" :class="['explore-page-btn', { active: page === 1 }]">{{ page }}</button>
      <button class="explore-page-btn">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import ActivityCard from '~/components/ActivityCard.vue';

</script>

<style scoped>
.explore-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  font-family: 'Inter', Arial, sans-serif;
}

.explore-filter-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}

.explore-select {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fff;
}

.explore-btn {
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  background: #eee;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.explore-btn.blue {
  background: #1976d2;
  color: #fff;
}

.explore-result-count {
  margin-bottom: 16px;
  color: #222;
  font-size: 1rem;
}

.explore-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
  margin-bottom: 32px;
}

.explore-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}

.explore-page-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: #f5f5f5;
  color: #222;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.explore-page-btn.active {
  background: #1976d2;
  color: #fff;
}


@media (max-width: 600px) {
  .explore-card-grid {
    grid-template-columns: 1fr;
  }
  .explore-filter-bar {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
}
</style>