<template>
  <div class="verify-bg">
    <div class="lang-switch">TH | EN</div>
    <div class="verify-center">
      <div class="verify-box">
        <h2 class="verify-title">ตรวจสอบอีเมลของคุณ</h2>
        <div class="verify-instruction">
          เราได้ส่งอีเมลรหัสยืนยันไปที่ contact@...com โปรดป้อนรหัส 6 หลักที่ส่งถึงอีเมลของคุณ
        </div>
        <div class="code-inputs">
          <div v-for="(digit, i) in 6" :key="i" class="code-box" :class="{active: i === 0}"></div>
        </div>
        <BaseButton class="verify-btn">ยืนยันรหัสผ่าน</BaseButton>
        <div class="verify-footer">
          <span>ยังไม่ได้รับรหัสยืนยันใช่ไหม?</span>
          <span class="resend">ส่งรหัสอีกครั้ง</span>
        </div>
      </div>
      <ArtCartoon />wawaq
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'
import '~/assets/form-common.css'

export default {
  components: { BaseButton },
}
</script>

<style scoped>
.verify-bg {
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.lang-switch {
  position: absolute;
  top: 32px;
  right: 64px;
  color: #fafafa;
  font-size: 14px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 400;
  letter-spacing: 1.4px;
  z-index: 2;
}
.verify-center {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.verify-title {
  color: #0C0C20;
  font-size: 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
}
.verify-box {
  width: 700px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 24px 32px;
  position: relative;
}
.verify-instruction {
  font-size: 15px;
  color: #888;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
}
.code-inputs {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 24px;
}
.code-box {
  width: 56px;
  height: 56px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  color: #222;
}
.code-box.active {
  border: 2px solid #7be495;
  color: #222;
  box-shadow: 0 0 0 2px #7be49533;
}
.verify-btn {
  width: 100%;
  margin-top: 12px;
  background: #e0e0e0;
  color: #222;
  font-size: 16px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 600;
  border-radius: 20px;
  height: 44px;
}
.verify-footer {
  margin-top: 24px;
  color: #222;
  font-size: 15px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 400;
  text-align: center;
  width: 100%;
}
.resend {
  color: #222;
  font-weight: 700;
  margin-left: 8px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
