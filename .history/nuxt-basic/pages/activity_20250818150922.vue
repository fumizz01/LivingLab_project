<template>
  <div class="activity-page">
    <div class="activity-header-image">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
        alt="night sky"
      />
    </div>
    <div class="activity-content">
      <h2 class="activity-title">การสังเกตท้องฟ้าและดาราศาสตร์</h2>
      <div class="activity-level">
        <button class="level-btn">ระดับ: ง่าย</button>
      </div>
      <div class="activity-section">
        <h3 class="activity-section-title">เนื้อหา</h3>
        <p class="activity-desc">
          กิจกรรมการสังเกตท้องฟ้าและดาราศาสตร์จะกระตุ้นการเรียนรู้ที่เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสประสบการณ์จริงในการดูดาวและการสังเกตการณ์ท้องฟ้าผ่านกล้องโทรทรรศน์ โดยมีวิทยากรผู้เชี่ยวชาญคอยให้คำแนะนำและตอบคำถามเกี่ยวกับปรากฏการณ์ทางดาราศาสตร์ เช่น พระจันทร์เต็มดวง สุริยุปราคา หรือฝนดาวตกต่างๆ
          <br /><br />
          กิจกรรมนี้มีจุดมุ่งหมายเพื่อสร้างความสนใจและทักษะการคิดเชิงเหตุผล ตลอดจนส่งเสริมความร่วมมือในทีมและการแบ่งปันข้อสังเกตต่างๆร่วมกัน ผู้เข้าร่วมกิจกรรมจะได้ฝึกทักษะการใช้เครื่องมือดาราศาสตร์เบื้องต้น เช่น การใช้กล้องโทรทรรศน์ การอ่านแผนที่ดาว และการบันทึกข้อมูลการสังเกตการณ์
        </p>
      </div>
      <div class="activity-image-section">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="star observation"
        />
      </div>
      <div class="activity-section">
        <p class="activity-desc">
          กิจกรรมการสังเกตท้องฟ้าและดาราศาสตร์จะกระตุ้นการเรียนรู้ที่เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสประสบการณ์จริงในการดูดาวและการสังเกตการณ์ท้องฟ้าผ่านกล้องโทรทรรศน์ โดยมีวิทยากรผู้เชี่ยวชาญคอยให้คำแนะนำและตอบคำถามเกี่ยวกับปรากฏการณ์ทางดาราศาสตร์ เช่น พระจันทร์เต็มดวง สุริยุปราคา หรือฝนดาวตกต่างๆ
          <br /><br />
          กิจกรรมนี้มีจุดมุ่งหมายเพื่อสร้างความสนใจและทักษะการคิดเชิงเหตุผล ตลอดจนส่งเสริมความร่วมมือในทีมและการแบ่งปันข้อสังเกตต่างๆร่วมกัน ผู้เข้าร่วมกิจกรรมจะได้ฝึกทักษะการใช้เครื่องมือดาราศาสตร์เบื้องต้น เช่น การใช้กล้องโทรทรรศน์ การอ่านแผนที่ดาว และการบันทึกข้อมูลการสังเกตการณ์
        </p>
      </div>
      <div class="activity-action">
        <button class="activity-join-btn">ลงชื่อเข้าใช้เพื่อทำแบบทดสอบ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for static content
</script>

<style scoped>
.activity-page {
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.activity-header-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.activity-content {
  padding: 32px 28px 0 28px;
}

.activity-title {
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.activity-level {
  margin-bottom: 1.5rem;
}

.level-btn {
  background: #ededed;
  color: #222;
  border: none;
  border-radius: 8px;
  padding: 0.35em 1.2em;
  font-size: 1rem;
  font-weight: 500;
  cursor: default;
}

.activity-section {
  margin-bottom: 2.2rem;
}

.activity-section-title {
  font-size: 1.08rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
}

.activity-desc {
  font-size: 1rem;
  color: #222;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.activity-image-section {
  display: flex;
  justify-content: center;
  margin: 2.2rem 0 2.2rem 0;
}

.activity-image-section img {
  width: 480px;
  max-width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.activity-action {
  display: flex;
  justify-content: center;
  margin: 48px 0 32px 0;
}

.activity-join-btn {
  background: #338af3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 2.5em;
  font-size: 1.08rem;
  cursor: pointer;
  transition: background 0.2s;
}

.activity-join-btn:hover {
  background: #2266c6;
}
</style>