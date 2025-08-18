<template>
  <div class="qrscan-page">
    <div class="qrscan-header">
      <h2 class="qrscan-title">Learning Spots</h2>
      <div class="qrscan-desc">
        Learning Spots คือจุดเรียนรู้ที่ถูกพัฒนาขึ้นมาในมหาวิทยาลัยฯ ที่เปิดโอกาสให้นักศึกษาและบุคคลทั่วไปได้เรียนรู้ผ่านห้องเรียน ผ่านกิจกรรมปฏิบัติจริง การทดลอง มีชิ้นส่วนหรือการดูดซึมเนื้อหาต่างๆ เพื่อเสริมสร้างทักษะ ความรู้ และแรงบันดาลใจเชิงจริง
      </div>
      <hr />
    </div>
    <div class="qrscan-center">
      <div class="qrscan-box">
        <img src="" alt="QR Code" class="qrscan-img" />
        <div class="qrscan-caption">Scan to find more information...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static layout
</script>

<style scoped>
.qrscan-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 16px;
}

.qrscan-header {
  margin-bottom: 32px;
}

.qrscan-title {
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.qrscan-desc {
  font-size: 0.98rem;
  color: #222;
  margin-bottom: 8px;
  line-height: 1.5;
}

.qrscan-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.qrscan-box {
  background: #ddd;
  border-radius: 24px;
  padding: 24px 24px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
}

.qrscan-img {
  width: 220px;
  height: 220px;
  object-fit: contain;
  margin-bottom: 12px;
}

.qrscan-caption {
  font-size: 0.95rem;
  color: #444;
  margin-top: 4px;
  text-align: center;
}

hr {
  margin: 16px 0 0 0;
  border: none;
  border-top: 1px solid #ccc;
}

@media (max-width: 600px) {
  .qrscan-box {
    width: 90vw;
    padding: 16px 8px 8px 8px;
  }
  .qrscan-img {
    width: 60vw;
    height: 60vw;
    max-width: 220px;
    max-height: 220px;
  }
}
</style>