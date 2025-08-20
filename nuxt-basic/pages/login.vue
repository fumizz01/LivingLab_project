<template>
  <v-app>
    <v-main>
      <div class="login-bg">
        <v-btn icon class="close-btn" @click="goHome">
          <v-icon>mdi-close</v-icon>
        </v-btn>
  <!-- Language switcher component -->
  <LangSwitcher />

        <div class="login-box">
          <h1 class="login-title">{{ t('login.title') }}</h1>

          <v-form @submit.prevent="onSubmit" class="w-100">
            <!-- Username -->
            <div class="field">
              <label :id="ids.username" class="field-label">
                <span class="req">*</span> {{ t('login.username') }}
              </label>

              <v-text-field
                v-model="username"
                @keypress="blockThai"
                :aria-labelledby="ids.username"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('login.usernamePlaceholder')"
                class="pill-input field-full"
                @blur="onBlur('username')"
                :error="touched.username && !!errors.username"
                :error-messages="touched.username && errors.username ? t('login.errors.usernameRequired') : ''"
              />
            </div>

            <!-- Password -->
            <div class="field">
              <label :id="ids.password" class="field-label">
                <span class="req">*</span> {{ t('login.password') }}
              </label>

              <v-text-field
                v-model="password"
                @keypress="blockThai"
                :aria-labelledby="ids.password"
                :type="showPassword ? 'text' : 'password'"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('login.passwordPlaceholder')"
                class="pill-input field-full"
                @blur="onBlur('password')"
                :error="touched.password && !!errors.password"
                :error-messages="touched.password && errors.password ? t('login.errors.passwordRequired') : ''"
              >
                <template #append-inner>
                  <img
                    :src="showPassword ? '/hidden.png' : '/eye.png'"
                    :alt="showPassword ? t('login.hidePasswordAlt') : t('login.showPasswordAlt')"
                    class="eye-icon"
                    role="button"
                    tabindex="0"
                    @click="showPassword = !showPassword"
                    @keydown.enter.prevent="showPassword = !showPassword"
                    @keydown.space.prevent="showPassword = !showPassword"
                  />
                </template>
              </v-text-field>

              <div class="forgot-password" @click="goForgotPassword">
                {{ t('login.forgotPassword') }}
              </div>
            </div>

            <v-btn class="login-btn" color="primary" type="submit" rounded="xl">
              {{ t('login.loginButton') }}
            </v-btn>
          </v-form>

          <div class="divider-text">{{ t('login.loginWithOther') }}</div>
          <v-divider class="my-4" />

          <div class="social-login">
            <v-btn color="white" class="social-btn" rounded="xl" @click="loginWithKMUTT">
              <template #prepend>
                <img
                  src="/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png"
                  alt="KMUTT"
                  class="kmutt-logo"
                />
              </template>
              <span class="social-btn-text">{{ t('login.loginWithKMUTT') }}</span>
            </v-btn>
          </div>

          <div class="register-link">
            <span>{{ t('login.noAccount') }}</span>
            <span class="register" @click="goRegister">{{ t('login.register') }}</span>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter} from 'vue-router'

const { t, locale } = useI18n({ useScope: 'global' })
const router = useRouter()

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const errors   = ref({ username: false, password: false })
const touched  = ref({ username: false, password: false })
const ids      = { username: 'lbl-username', password: 'lbl-password' }

function onBlur(field: 'username' | 'password') {
  touched.value[field] = true
  validate()
}
function validate() {
  errors.value.username = !username.value
  errors.value.password = !password.value
  return !errors.value.username && !errors.value.password
}
function onSubmit() {
  touched.value.username = true
  touched.value.password = true
  if (validate()) {
    // TODO: login logic
  }
}

function localePath(path: string) {
  // ถ้า locale เป็น en ให้เติม /en นำหน้า path
  return locale.value === 'en' ? `/en${path.startsWith('/') ? path : '/' + path}` : path
}

function goHome() {
  router.push(localePath('/'))
}

function goRegister() {
  router.push(localePath('/register'))
}
function goForgotPassword() {
  router.push(localePath('/forgetpassword'))
}
async function loginWithKMUTT() {
  // ตรวจสอบ username ก่อน
  if (!username.value) {
    touched.value.username = true;
    errors.value.username = true;
    return;
  }
  try {
    // เรียก backend เพื่อตรวจสอบ email สำรอง
    const res = await fetch('/api/check-personal-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value })
    });
    const data = await res.json();
    if (data.hasPersonalEmail) {
      // ไปหน้า SSO Microsoft/Azure
      window.location.href = '/api/auth/azure'; // หรือ path SSO ที่ backend กำหนด
    } else {
      // ไปหน้า register เพื่อเพิ่ม email สำรอง
      router.push(localePath('/register'));
    }
  } catch (e) {
    // error handling
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่');
  }
}

function blockThai(e: KeyboardEvent) { if (/[ก-๙]/.test(e.key)) e.preventDefault() }
</script>

<style scoped>

.login-bg { 
  min-height: 100vh; 
  background: #0a0a1a; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 100vw; 
}
.login-box { 
  width: 720px; 
  max-width: 95vw; 
  border-radius: 24px; 
  background: #fff; 
  box-shadow: 0 8px 40px rgba(0,0,0,0.18); 
  padding: 48px 32px 32px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}
.login-title { 
  font-size: 32px; 
  font-weight: 700; 
  color: #0c0c20; 
  margin-bottom: 28px; 
  text-align: center; 
}
.w-100 { 
  width: 100%; 
}

.field { 
  width: 100%; 
  margin-bottom: 18px; 
  position: relative; 
}
.field-label { 
  display: block; 
  font-weight: 700; 
  margin: 6px 0 10px; 
  color: #222; 
}
.req { 
  color: #e53935; 
  margin-right: 6px; 
}
.field-full { 
  width: 100%; max-width: 100% !important; display: block; 
}
.pill-input :deep(.v-field) { 
  width: 100%; max-width: 100%; position: relative; border-radius: 20px; overflow: hidden; height: 54px; min-height: 54px; background: #fff; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 16px 36px rgba(0,0,0,0.12); box-sizing: border-box; 
}
.pill-input :deep(.v-field.v-field--focused) { 
  box-shadow: 0 22px 48px rgba(0,0,0,0.16); 
}
.pill-input :deep(.v-field__input) { 
  height: 54px; align-items: center; padding: 0 18px; 
}
.pill-input :deep(input::placeholder) { 
  color: #c7c7c7; 
}
.eye-icon { 
  width: 22px; height: 22px; object-fit: contain; cursor: pointer; user-select: none; 
}
.pill-input :deep(.v-field__append-inner) { 
  padding-right: 14px; 
}
:deep(.v-messages__message) { 
  font-size: 13px; 
}
.forgot-password { 
  color: #222; 
  font-size: 14px; 
  font-weight: 700; 
  letter-spacing: 0.02em; 
  cursor: pointer; 
  text-align: right; 
  margin-top: 6px; 
}
.login-btn { 
  align-self: center; 
  display: block; 
  margin: 18px auto 0; 
  width: 180px; 
  height: 44px; 
  border-radius: 22px; 
  font-size: 16px; 
  font-weight: 700; 
  box-shadow: 0 4px 20px rgba(0,0,0,0.1); 
  background: #222 !important; 
  color: #fff !important; 
}
.divider-text { 
  text-align: center; 
  font-size: 15px; 
  margin-top: 26px; 
  margin-bottom: 8px; 
  color: #222; 
}
.social-login { 
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
}
.social-btn { 
  width: 100%;
  min-height: 56px;
  border-radius: 9999px;
  background-color: #fff !important;
  color: #222 !important;
  font-weight: 700;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.kmutt-logo { 
  height: 45px; 
  width: auto; 
  display: block; 
  object-fit: contain; 
  filter: none; margin-left: 2px; 
}
.social-btn-text { 
  text-align: center;
  width: 100%; 
}
.register-link { 
  margin-top: 18px; 
  color: #222; 
  font-size: 14px; 
  font-weight: 700; 
  text-align: center; 
  display: flex; 
  justify-content: center; 
  gap: 6px; 
}
.register { 
  text-decoration: underline; 
  cursor: pointer; 
  color: #222; 
}
@media (max-width: 600px) { 
  .login-box { 
    width: 99vw; 
    padding: 16px 10px; 
    border-radius: 16px; 
  } 
  .login-title { 
    font-size: 22px; 
    margin-bottom: 12px; 
  } 
  .pill-input :deep(.v-field) { 
    height: 50px; 
    min-height: 50px; 
    box-shadow: 0 8px 24px rgba(0,0,0,0.12); 
  } 
  .pill-input :deep(.v-field__input) { 
    height: 50px; 
    padding: 0 14px; 
  } 
  .login-btn {  
    height: 40px; 
    font-size: 14px; 
    border-radius: 18px; 
    margin-top: 12px; 
  } 

  .social-btn {  
    height: 40px; 
    font-size: 14px; 
    border-radius: 18px; 
    margin-top: 12px; 
  } 

  /* .lang-switch { 
    top: 12px; 
    right: 12px; 
  }  */
}
.close-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 20;
  background: rgb(255, 255, 255);
}
</style>

