<template>
  <div class="forget-bg">
    <div class="lang-switch">TH | EN</div>
    <div class="forget-center">
      <div class="forget-box">
        <h2 class="forget-title">ลืมรหัสผ่าน</h2>
        <form class="forget-form" @submit.prevent="onSubmit">
          <div class="forget-instruction">โปรดกรอกอีเมลที่ลงทะเบียนไว้ของคุณ</div>
          <BaseInput
            id="email"
            label="อีเมล"
            required
            :error="error"
            v-model="email"
            placeholder="อีเมล"
            type="email"
            :asciiOnly="true"
          />
          <BaseButton class="forget-btn" type="submit">ขอรีเซ็ตรหัสผ่าน</BaseButton>
        </form>
        <div class="back-login" @click="goLogin">กลับไปเข้าสู่ระบบ</div>
      </div>
      <ArtCartoon />
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/BaseInput.vue'
import BaseButton from '~/components/BaseButton.vue'
import '~/assets/form-common.css'

export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      email: '',
      error: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.email) {
        this.error = 'กรุณากรอกอีเมล';
      } else if (!this.email.includes('@')) {
        this.error = 'อีเมลต้องมีเครื่องหมาย @';
      } else {
        this.error = '';
        // ส่งอีเมลรีเซ็ตรหัสผ่าน
      }
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.forget-bg {
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
.forget-center {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.forget-title {
  color: #0C0C20;
  font-size: 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
}
.forget-box {
  width: 600px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 24px 32px;
  position: relative;
}
.forget-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}
.forget-instruction {
  font-size: 16px;
  color: #888;
  margin-bottom: 12px;
  text-align: center;
  width: 100%;
}
.forget-btn {
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
.back-login {
  margin-top: 24px;
  color: #222;
  font-size: 15px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  width: 100%;
}
</style>
