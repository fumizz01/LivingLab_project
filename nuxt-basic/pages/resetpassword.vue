<template>
  <div class="reset-bg">
    <div class="lang-switch">TH | EN</div>
    <div class="reset-center">
      <div class="reset-box">
        <h2 class="reset-title">รีเซ็ตรหัสผ่าน</h2>
        <div class="reset-instruction">
          รหัสผ่านใหม่ ตรวจสอบให้แน่ใจว่าแตกต่างจากรหัสผ่านเก่าเพื่อความปลอดภัย
        </div>
        <form class="reset-form" @submit.prevent="handleSubmit">
          <PasswordInput
            id="new-password"
            label="รหัสผ่านใหม่"
            required
            placeholder="รหัสผ่านใหม่"
            v-model="newPassword"
            :asciiOnly="true"
            :error="errors.newPassword"
          />
          <PasswordRules :password="newPassword" />
          <PasswordInput
            id="confirm-password"
            label="ยืนยันรหัสผ่าน"
            required
            placeholder="ยืนยันรหัสผ่าน"
            v-model="confirmPassword"
            :asciiOnly="true"
            :error="errors.confirmPassword"
          />
          <BaseButton class="reset-btn" type="submit">ยืนยันการรีเซ็ตรหัสผ่าน</BaseButton>
        </form>
      </div>
      <ArtCartoon />
    </div>
  </div>
</template>

<script>
import PasswordInput from '~/components/PasswordInput.vue'
import BaseButton from '~/components/BaseButton.vue'
import PasswordRules from '~/components/PasswordRules.vue'
import '~/assets/form-common.css'

export default {
  components: { PasswordInput, BaseButton, PasswordRules },
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      errors: {}
    }
  },
  // Password strength UI is now handled by PasswordRules component
  methods: {
    handleSubmit() {
      this.errors = {};
      if (!this.newPassword) {
        this.errors.newPassword = 'กรุณากรอกรหัสผ่านใหม่';
      } 
      if (!this.confirmPassword) {
        this.errors.confirmPassword = 'กรุณายืนยันรหัสผ่าน';
      } else if (this.newPassword && this.confirmPassword !== this.newPassword) {
        this.errors.confirmPassword = 'รหัสผ่านไม่ตรงกัน';
      }
      if (Object.keys(this.errors).length === 0) {
        // ส่งข้อมูลไป backend หรือดำเนินการต่อ
      }
    }
  }
}
</script>

<style scoped>
.reset-bg {
  min-height: 100vh;
  background: #222222;
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
.reset-center {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.reset-title {
  color: #0C0C20;
  font-size: 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
}
.reset-box {
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
.reset-instruction {
  font-size: 15px;
  color: #888;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
}
.reset-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}
.reset-btn {
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
</style>
