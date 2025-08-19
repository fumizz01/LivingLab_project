<template>
  <div class="qrscan-page">
    <div class="qrscan-header">
      <h2 class="qrscan-title">Learning Spots</h2>
      <div class="qrscan-desc">
        Learning Spots คือจุดเรียนรู้ภายในมหาวิทยาลัย ที่เปิดโอกาสให้นักศึกษาและบุคคลทั่วไปได้เรียนรู้นอกห้องเรียน ผ่านกิจกรรมปฏิบัติจริง การทดลอง เวิร์กช็อป หรือการพูดคุยกับผู้เชี่ยวชาญ เพื่อเสริมสร้างทักษะ ความรู้ และแรงบันดาลใจในชีวิตจริง
      </div>
      <hr />
    </div>
    <div class="qrscan-center">
      <div class="qrscan-box">
        <qrcode-stream @decode="onDecode" />
        <div class="qrscan-caption">Scan to find more information...</div>
        <div v-if="qrResult" class="qrscan-result">
          <strong>Result:</strong> {{ qrResult }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QrcodeStream } from 'vue-qrcode-reader'

const qrResult = ref('')

function onDecode(result) {
  qrResult.value = result
}
</script>

<style scoped>
.qrscan-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 16px;
}

.qrscan-header {
  width: 100%;
  padding: 0 24px;
  margin-bottom: 32px;
  box-sizing: border-box;
}

.qrscan-title {
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.qrscan-desc {
  font-size: 1rem;
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
  width: 350px;
  height: 400px;
}

.qrscan-box :deep(video) {
  border-radius: 18px;
  overflow: hidden;
}

.qrscan-caption {
  font-size: 0.95rem;
  color: #444;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}

.qrscan-result {
  margin-top: 12px;
  font-size: 1rem;
  color: #222;
  word-break: break-all;
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
}
</style>