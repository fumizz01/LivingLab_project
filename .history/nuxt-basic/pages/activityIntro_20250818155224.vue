<template>
  <div class="activity-intro-container">
    <h2 class="activity-title">การสังเกตดวงดาวและดาราศาสตร์</h2>
    <span class="level-chip">ระดับ: ง่าย</span>
    <hr />
    <div class="activity-objectives">
      <h3>วัตถุประสงค์การเรียนรู้</h3>
      <ul>
        <li>เพื่อส่งเสริมความเข้าใจพื้นฐานเกี่ยวกับดวงดาว ดาวเคราะห์ และปรากฏการณ์ทางดาราศาสตร์ เช่น การเกิดพระจันทร์เต็มดวง สุริยุปราคา หรือฝนดาวตกต่างๆ</li>
        <li>เพื่อฝึกทักษะการสังเกต การตั้งคำถาม และการใช้เครื่องมือดาราศาสตร์เบื้องต้น เช่น การใช้กล้องโทรทรรศน์ การอ่านแผนที่ดาว</li>
        <li>เพื่อส่งเสริมการถ่ายทอดความรู้ด้านดาราศาสตร์แก่ผู้อื่น เช่น เพื่อนและครอบครัว</li>
        <li>เพื่อปลูกฝังความสนใจและทักษะการคิดวิเคราะห์แบบเชิงเหตุผล</li>
        <li>เพื่อส่งเสริมความร่วมมือในทีมและการแบ่งปันประสบการณ์และข้อสังเกตต่างๆร่วมกัน</li>
      </ul>
    </div>
    <div class="activity-image-section">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="night sky" class="activity-image" />
      <div class="activity-image-overlay">
        <div class="activity-image-desc">
          เปิดประสบการณ์ดูดาวผ่านกล้องโทรทรรศน์ พร้อมรับบทวิทยากรผู้เชี่ยวชาญ
        </div>
        <div class="activity-location">
          <span>Location :</span> KMUTT Library floor 5
        </div>
      </div>
    </div>
    <div class="activity-action">
      <NuxtLink to="/activity" class="activity-join-btn">{{ $t('activityIntro.btn') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for static content
</script>

<style scoped>
.activity-intro-container {
  max-width: 800px;
  margin: 40px auto;
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.activity-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.activity-level {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #222;
}

hr {
  margin: 1rem 0;
}

.activity-objectives h3 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.activity-objectives ul {
  margin: 0;
  padding-left: 1.2rem;
}

.activity-objectives li {
  margin-bottom: 0.4rem;
  font-size: 1rem;
}

.activity-image-section {
  position: relative;
  margin: 2rem 0 1.5rem 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.activity-image {
  width: 100%;
  display: block;
  height: 400px;
  object-fit: cover;
}

.activity-image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(20,20,20,0.7);
  color: #fff;
  padding: 24px 20px 16px 20px;
  box-sizing: border-box;
}

.activity-image-desc {
  font-size: 1.15rem;
  margin-bottom: 0.8rem;
  text-align: center;
}

.activity-location {
  font-size: 0.98rem;
  text-align: right;
  font-weight: 500;
}

.activity-action {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.activity-join-btn {
  background: #338af3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 2.5em;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}

.activity-join-btn:hover {
  background: #2266c6;
}
</style>