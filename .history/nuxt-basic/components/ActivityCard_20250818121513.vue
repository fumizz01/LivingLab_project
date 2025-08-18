<template>
    <button class="card-container">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.qlsg6XQFnujSd7Xwi7Ad1gHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="image"
          class="card-image"
        />
        <div class="card-info-overlay">
          <h2 class="card-title">การสังเกตท้องฟ้าและดาราศาสตร์</h2>
          <p class="card-desc">
            เปิดประสบการณ์ดูดาวผ่านกล้องโทรทรรศน์<br />
            พร้อมอธิบายจากผู้เชี่ยวชาญ
          </p>
          <div class="card-meta">
            <span class="card-location">
              <img
                src="https://cdn-user-icons.flaticon.com/67588/67588139/1755229324023.svg?token=exp=1755230239~hmac=4f752108a095f58b66c494ccd34488f9"
                alt="location"
                width="16"
                height="16"
              />
              Location M1
            </span>
            <span class="card-views">
              <img
                src="https://cdn-user-icons.flaticon.com/67588/67588139/1755229374889.svg?token=exp=1755230274~hmac=1e7e4cddc8150a58b626e10aa08ecfb2"
                alt="views"
                width="16"
                height="16"
              />
              2.5k
            </span>
          </div>
        </div>
      </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.card-info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 16px;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-container:hover .card-info-overlay {
  opacity: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 8px;
}

.card-desc {
  font-size: 0.9rem;
  margin: 0 0 12px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}
</style>