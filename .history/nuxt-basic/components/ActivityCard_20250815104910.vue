<template>
  <button class="card-container">
    <img src="https://tse3.mm.bing.net/th/id/OIP.qlsg6XQFnujSd7Xwi7Ad1gHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="image" class="card-image" />
    <div class="card-info-overlay">
      <h2 class="card-title">การสังเกตท้องฟ้าและดาราศาสตร์</h2>
      <p class="card-desc">
        เปิดประสบการณ์ดูดาวผ่านกล้องโทรทรรศน์<br />
        พร้อมอธิบายจากผู้เชี่ยวชาญ
      </p>
      <div class="card-meta">
        <span class="card-location">
          <img src="https://cdn-user-icons.flaticon.com/67588/67588139/1755229324023.svg?token=exp=1755230239~hmac=4f752108a095f58b66c494ccd34488f9" alt="location" width="16" height="16" />
          Location M1
        </span>
        <span class="card-views">
          <img src="https://cdn-user-icons.flaticon.com/67588/67588139/1755229374889.svg?token=exp=1755230274~hmac=1e7e4cddc8150a58b626e10aa08ecfb2" alt="views" width="16" height="16"  />
          2.5k
        </span>
      </div>
    </div>
  </button>
</template>

<script setup></script>

<style scoped>
.card-container {
  position: relative;
  background: none;
  border: none;
  border-radius: 31px;
  padding: 0;
  margin-bottom: 16px;
  width: 350px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-info-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  opacity: 90%;
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 100%, rgba(0,0,0,0.2) 100%);
  color: #f8f8f8;
  padding: 16px 16px 12px 16px;
  border-bottom-left-radius: 31px;
  border-bottom-right-radius: 31px;
  border-top-left-radius: 31px;
  border-top-right-radius: 31px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.card-desc {
  font-size: 0.95rem;
  margin: 0 0 12px 0;
  opacity: 0.85;
  line-height: 1.3;
}

.card-meta {
  display: flex;
  padding-top:20px;
  align-items: center;
  font-size: 0.95rem;
  gap: 16px;
  justify-content: space-between; 
}

.card-location {
  display: flex;
  align-items: center;
  gap: 7px;
  opacity: 0.85;
}

.card-views {
  display: flex;
  align-items: center;
  gap: 7px;
  opacity: 0.85;
  margin-left: auto; /* Add this line to push to right */
}
</style>
