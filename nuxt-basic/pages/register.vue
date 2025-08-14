<template>
  <div class="register-bg">
    <div class="lang-switch">TH | EN</div>
    <div class="register-center">
      <!-- <h2 class="register-title">ลงทะเบียน</h2> -->
      <div class="register-box">
        <h2 class="register-title">ลงทะเบียน</h2>
        <form class="register-form" @submit.prevent="handleSubmit">
          <div class="row">
            <BaseInput id="firstname" label="ชื่อจริง" required :error="errors.firstname" v-model="firstname" placeholder="ชื่อจริง" />
            <BaseInput id="lastname" label="นามสกุล" required :error="errors.lastname" v-model="lastname" placeholder="นามสกุล" />
          </div>
          <BaseInput id="username" label="ชื่อผู้ใช้" required :error="errors.username" v-model="username" placeholder="ชื่อผู้ใช้" :englishOnly="true" />
          <BaseInput id="email" label="อีเมล" required :error="errors.email" v-model="email" placeholder="อีเมล" type="email" :asciiOnly="true" />
          <PasswordInput id="password" label="รหัสผ่าน" required :error="errors.password" v-model="password" placeholder="รหัสผ่าน" :asciiOnly="true">
          <PasswordRules :password="password" />
          </PasswordInput>
          <PasswordInput id="confirmPassword" label="ยืนยันรหัสผ่าน" required :error="errors.confirmPassword" v-model="confirmPassword" placeholder="ยืนยันรหัสผ่าน" :asciiOnly="true" />
          <BaseButton class="register-btn" type="submit">ลงทะเบียน</BaseButton>
        </form>
        <Divider>ลงทะเบียนด้วยบัญชีอื่น</Divider>
        <div class="social-login">
          <SocialLoginButton icon="images/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png" alt="KMUTT">ลงทะเบียนด้วยบัญชี KMUTT</SocialLoginButton>
          <!-- <SocialLoginButton icon="/Screenshot 2025-07-14 103008.png" alt="oneKMUTT">ลงทะเบียนด้วยบัญชี oneKMUTT</SocialLoginButton> -->
        </div>
        <div class="login-link">
          <span>เป็นสมาชิกแล้วใช่ไหม?</span>
          <span class="login" @click="goLogin">เข้าสู่ระบบ</span>
        </div>
      </div>
      <ArtCartoon />
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/BaseInput.vue'
import PasswordInput from '~/components/PasswordInput.vue'
import Divider from '~/components/Divider.vue'
import SocialLoginButton from '~/components/SocialLoginButton.vue'
import BaseButton from '~/components/BaseButton.vue'
import PasswordRules from '~/components/PasswordRules.vue'
import '~/assets/form-common.css'


export default {
  components: { BaseInput, PasswordInput, Divider, SocialLoginButton, BaseButton, PasswordRules }, 
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      if (!this.firstname) this.errors.firstname = 'กรุณากรอกชื่อจริง';
      if (!this.lastname) this.errors.lastname = 'กรุณากรอกนามสกุล';
      if (!this.username) this.errors.username = 'กรุณากรอกชื่อผู้ใช้';
      if (!this.email) {
        this.errors.email = 'กรุณากรอกอีเมล';
      } else if (!this.email.includes('@')) {
        this.errors.email = 'อีเมลต้องมีเครื่องหมาย @';
      }
      if (!this.password) this.errors.password = 'กรุณากรอกรหัสผ่าน';
      if (!this.confirmPassword) this.errors.confirmPassword = 'กรุณายืนยันรหัสผ่าน';
      if (this.password && this.confirmPassword && this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'รหัสผ่านไม่ตรงกัน';
      }
      if (Object.keys(this.errors).length === 0) {
        // ส่งข้อมูลไป backend หรือดำเนินการต่อ
      }
    },
    onUsernameInput(e) {
      // ลบ handler นี้ เพราะใช้ prop englishOnly ที่ BaseInput แทน
    },
    onPasswordInput(e) {
      // ลบ handler นี้ เพราะใช้ prop asciiOnly ที่ PasswordInput แทน
    },
    onEmailInput(e) {
      // ลบ handler นี้ เพราะใช้ prop asciiOnly ที่ BaseInput แทน
    },
    onConfirmPasswordInput(e) {
      // ลบ handler นี้ เพราะใช้ prop asciiOnly ที่ PasswordInput แทน
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700&family=Work+Sans:wght@600&display=swap');

.register-bg {
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
  /* color: #222; */
  color: #fff;
  font-size: 14px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 400;
  letter-spacing: 1.4px;
  z-index: 2;
}
.register-center {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.register-title {
  color: #0C0C20;
  font-size: 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
}
.register-box {
  width: 600px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 32px 24px 32px;
  position: relative;
}
.register-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.row {
  display: flex;
  gap: 16px;
  width: 100%;
}
.social-login {
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto 0 auto;
}
.login-link {
  margin-top: 32px;
  color: #222;
  font-size: 15px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.login {
  color: #222;
  font-size: 15px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  cursor: pointer;
  text-decoration: underline;
}

/* Make inputs and buttons smaller */
/* .register-box :deep(input),
.register-box :deep(button) {
  font-size: 13px !important;
  height: 32px !important;
  padding: 4px 10px !important;
}
.register-box :deep(label) {
  font-size: 12px !important;
}
.register-btn {
  width: 120px !important;
  height: 32px !important;
  font-size: 14px !important;
  margin-top: 10px !important;
  border-radius: 16px !important;
  padding: 0 !important;
} */
</style>
