<template>
  <div class="activity-page">
    <div class="activity-header-image">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
        alt="night sky"
      />
      <div class="header-gradient"></div>
      <div class="header-title-box">
        <h2 class="header-title">การสังเกตท้องฟ้าและดาราศาสตร์</h2>
        <span class="level-chip">ระดับ: ง่าย</span>
      </div>
    </div>
    <div class="activity-content">
      <section class="activity-section">
        <h3 class="activity-section-title">เนื้อหา</h3>
        <p class="activity-desc">
          กิจกรรมการสังเกตท้องฟ้าและดาราศาสตร์จะกระตุ้นการเรียนรู้ที่เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสประสบการณ์จริงในการดูดาวและการสังเกตการณ์ท้องฟ้าผ่านกล้องโทรทรรศน์ โดยมีวิทยากรผู้เชี่ยวชาญคอยให้คำแนะนำและตอบคำถามเกี่ยวกับปรากฏการณ์ทางดาราศาสตร์ เช่น พระจันทร์เต็มดวง สุริยุปราคา หรือฝนดาวตกต่างๆ
          <br /><br />
          กิจกรรมนี้มีจุดมุ่งหมายเพื่อสร้างความสนใจและทักษะการคิดเชิงเหตุผล ตลอดจนส่งเสริมความร่วมมือในทีมและการแบ่งปันข้อสังเกตต่างๆร่วมกัน ผู้เข้าร่วมกิจกรรมจะได้ฝึกทักษะการใช้เครื่องมือดาราศาสตร์เบื้องต้น เช่น การใช้กล้องโทรทรรศน์ การอ่านแผนที่ดาว และการบันทึกข้อมูลการสังเกตการณ์
        </p>
      </section>
      <div class="activity-image-section">
        <div class="image-card">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="star observation"
          />
          <div class="image-glow"></div>
        </div>
      </div>
      <section class="activity-section">
        <p class="activity-desc">
          กิจกรรมการสังเกตท้องฟ้าและดาราศาสตร์จะกระตุ้นการเรียนรู้ที่เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสประสบการณ์จริงในการดูดาวและการสังเกตการณ์ท้องฟ้าผ่านกล้องโทรทรรศน์ โดยมีวิทยากรผู้เชี่ยวชาญคอยให้คำแนะนำและตอบคำถามเกี่ยวกับปรากฏการณ์ทางดาราศาสตร์ เช่น พระจันทร์เต็มดวง สุริยุปราคา หรือฝนดาวตกต่างๆ
          <br /><br />
          กิจกรรมนี้มีจุดมุ่งหมายเพื่อสร้างความสนใจและทักษะการคิดเชิงเหตุผล ตลอดจนส่งเสริมความร่วมมือในทีมและการแบ่งปันข้อสังเกตต่างๆร่วมกัน ผู้เข้าร่วมกิจกรรมจะได้ฝึกทักษะการใช้เครื่องมือดาราศาสตร์เบื้องต้น เช่น การใช้กล้องโทรทรรศน์ การอ่านแผนที่ดาว และการบันทึกข้อมูลการสังเกตการณ์
        </p>
      </section>
      <div class="activity-action">
        <button class="activity-join-btn">
          <span>ลงชื่อเข้าใช้เพื่อทำแบบทดสอบ</span>
          <svg class="btn-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" fill="#fff" opacity="0.18"/>
            <path d="M7 11h8M15 11l-3-3m3 3l-3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(51, 138, 243, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.activity-header-image {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.activity-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.85) saturate(1.1);
}

.header-gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(51, 138, 243, 0.18) 0%, rgba(0, 0, 0, 0.22) 100%);
  z-index: 1;
}

.header-title-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 32px 36px 18px 36px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-title {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 16px rgba(51, 138, 243, 0.18), 0 1px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 8px;
}

.level-chip {
  background: linear-gradient(90deg, #338af3 60%, #2266c6 100%);
  color: #fff;
  border-radius: 16px;
  padding: 0.25em 1.2em;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(51, 138, 243, 0.12);
  letter-spacing: 0.5px;
}

.activity-content {
  padding: 36px 38px 0 38px;
}

.activity-section {
  margin-bottom: 2.2rem;
}

.activity-section-title {
  font-size: 1.18rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: #338af3;
  letter-spacing: 0.5px;
}

.activity-desc {
  font-size: 1.08rem;
  color: #222;
  line-height: 1.8;
  margin-bottom: 0.5rem;
  text-align: justify;
}

.activity-image-section {
  display: flex;
  justify-content: center;
  margin: 2.2rem 0 2.2rem 0;
}

.image-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(51, 138, 243, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;
}

.image-card img {
  width: 480px;
  max-width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  border-radius: 18px;
  transition: transform 0.3s;
}

.image-card:hover {
  box-shadow: 0 16px 48px 0 rgba(51, 138, 243, 0.28), 0 4px 16px rgba(0, 0, 0, 0.18);
  transform: scale(1.03);
}

.image-card:hover img {
  transform: scale(1.04) rotate(-1deg);
}

.image-glow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 18px;
  box-shadow: 0 0 48px 12px rgba(51, 138, 243, 0.18);
  opacity: 0.7;
  z-index: 2;
  transition: opacity 0.3s;
}

.image-card:hover .image-glow {
  opacity: 1;
}

.activity-action {
  display: flex;
  justify-content: center;
  margin: 56px 0 40px 0;
}

.activity-join-btn {
  background: linear-gradient(90deg, #338af3 60%, #2266c6 100%);
  color: #fff;
  border: none;
  border-radius: 32px;
  padding: 0.85em 3em;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(51, 138, 243, 0.18);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  gap: 0.7em;
  letter-spacing: 0.5px;
}

.activity-join-btn:hover {
  background: linear-gradient(90deg, #2266c6 60%, #338af3 100%);
  box-shadow: 0 8px 32px rgba(51, 138, 243, 0.28);
  transform: scale(1.04);
}

.btn-icon {
  vertical-align: middle;
  margin-left: 2px;
  transition: transform 0.2s;
}

.activity-join-btn:hover .btn-icon {
  transform: translateX(4px) scale(1.1);
}

@media (max-width: 1028px) {
  .activity-page {
    border-radius: 0;
    box-shadow: none;
  }
  .activity-header-image {
    height: 160px;
    border-radius: 0;
  }
  .header-title-box {
    padding: 18px 16px 10px 16px;
  }
  .header-title {
    font-size: 1.2rem;
  }
  .activity-content {
    padding: 18px 10px 0 10px;
  }
  .image-card img {
    width: 100%;
    height: auto;
  }
}
</style>