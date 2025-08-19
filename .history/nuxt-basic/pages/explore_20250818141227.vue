<template>
  <div class="explore-page">
    <!-- Filter Container -->
    <div class="explore-filter-container">
      <div class="explore-filter-bar">
        <input
          class="explore-select"
          list="area-list"
          placeholder="Area..."
        />
        <datalist id="area-list">
          <option value="Location M1" />
          <option value="Location M2" />
        </datalist>

        <input
          class="explore-select"
          list="group-list"
          placeholder="Group..."
        />
        <datalist id="group-list">
          <option value="Science" />
          <option value="Art" />
        </datalist>

        <div class="explore-btn-group">
          <button class="explore-btn blue">t{{ $t('explore.search') }}</button>
          <button class="explore-btn blue" @click="showSearch = !showSearch">ค้นหา activity</button>
        </div>
      </div>
      <div v-if="showSearch" class="explore-search-field">
        <input
          type="text"
          class="explore-search-input"
          placeholder="Search activity..."
        />
      </div>
    </div>

    <!-- Result Count -->
    <div class="explore-result-count">
      Showing 9 of 379 unit(s)
    </div>

    <!-- Card Grid -->
    <div class="explore-card-grid">
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
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
import { ref } from 'vue'
import ActivityCard from '~/components/ActivityCard.vue';

const showSearch = ref(false)
</script>

<style scoped>
.explore-page {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 32px 16px;
  font-family: 'Inter', Arial, sans-serif;
}

.explore-filter-container {
  background: #ededed;
  border-radius: 20px;
  padding: 18px 32px;
  margin-bottom: 24px;
}

.explore-filter-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 0;
  background: none;
  border-radius: 0;
  padding: 0;
}

.explore-select {
  flex: 1 1 0;
  padding: 0 0 8px 0;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  background: transparent;
  font-size: 1.08rem;
  color: #888;
  outline: none;
  margin-right: 0;
  border-radius: 0;
  transition: border-color 0.2s;
}
.explore-select:focus {
  border-bottom: 2px solid #1976d2;
  color: #222;
}

.explore-btn-group {
  display: flex;
  gap: 12px;
}

.explore-btn {
  padding: 8px 22px;
  border-radius: 12px;
  border: none;
  background: #1976d2;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  box-shadow: none;
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

.explore-search-field {
  margin-top: 8px;
  background: none;
  border-radius: 0;
  padding: 0;
}

.explore-search-input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  background: transparent;
  font-size: 1.08rem;
  color: #888;
  outline: none;
  margin-top: 0;
  border-radius: 0;
  transition: border-color 0.2s;
}
.explore-search-input:focus {
  border-bottom: 2px solid #1976d2;
  color: #222;
}

@media (max-width: 820px) {
  .explore-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .explore-filter-container {
    padding: 14px 10px;
  }
  .explore-filter-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 0;
  }
  .explore-btn-group {
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .explore-card-grid {
    grid-template-columns: 1fr;
  }
  .explore-filter-bar {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    justify-content: center;
  }
  .explore-btn {
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    width: 100%;
    display: block;
  }
}

</style>