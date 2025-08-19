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
      <button class="explore-btn blue">เพิ่ม activity</button>
    </div>

    <!-- Result Count -->
    <div class="explore-result-count">
      Showing 9 of 379 กิจกรรม
    </div>

    <!-- Card Grid -->
    <div class="explore-card-grid">
      <div v-for="card in cards" :key="card.id" class="explore-card">
        <img :src="card.img" class="explore-card-img" />
        <div class="explore-card-info">
          <div class="explore-card-title">{{ card.title }}</div>
          <div class="explore-card-desc">{{ card.desc }}</div>
          <div class="explore-card-meta">
            <span class="explore-card-location">📍 {{ card.location }}</span>
            <span class="explore-card-views">👁 {{ card.views }}</span>
          </div>
        </div>
      </div>
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
const cards = [
  {
    id: 1,
    img: '/img1.jpg',
    title: 'การสังเกตท้องฟ้าและดาราศาสตร์',
    desc: 'กิจกรรมเรียนรู้เกี่ยวกับดาราศาสตร์และการสังเกตท้องฟ้า...',
    location: 'Location M1',
    views: '2.5k'
  },
  {
    id: 2,
    img: '/img2.jpg',
    title: 'Coding Camp มหาวิทยาลัยสีเขียว',
    desc: 'ค่ายเรียนรู้การเขียนโปรแกรมและเทคโนโลยี...',
    location: 'Location M1',
    views: '2.5k'
  },
  // ...add more mock cards as needed
]
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

.explore-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.explore-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.explore-card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.explore-card-info {
  padding: 16px;
  background: linear-gradient(0deg, #222 80%, #333 100%);
  color: #fff;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.explore-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.explore-card-desc {
  font-size: 0.98rem;
  margin-bottom: 10px;
  opacity: 0.85;
}

.explore-card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  opacity: 0.85;
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

@media (max-width: 900px) {
  .explore-card-grid {
    grid-template-columns: repeat(2, 1fr);
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
  }
}
</style>