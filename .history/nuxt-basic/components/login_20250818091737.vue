<template>
  <v-app>
    <v-main>
      <div class="login-bg">
        <v-btn icon class="close-btn" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!-- Language switch (Nuxt i18n) -->
        <div class="lang-switch">
          <a class="lang-btn" @click.prevent="switchLang('th')">TH</a>
          <span class="sep">|</span>
          <a class="lang-btn" @click.prevent="switchLang('en')">EN</a>
        </div>

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
                <!-- ใช้ภาพจาก public/ สำหรับโชว์/ซ่อนรหัสผ่าน -->
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

            <!-- ปุ่มเข้าสู่ระบบ (อยู่กลาง) -->
            <v-btn class="login-btn" color="primary" type="submit" rounded="xl">
              {{ t('login.loginButton') }}
            </v-btn>
          </v-form>

          <div class="divider-text">{{ t('login.loginWithOther') }}</div>
          <v-divider class="my-4" />

          <!-- Social: KMUTT -->
          <div class="social-login">
            <v-btn color="white" class="social-btn" rounded="xl" @click="loginWithKMUTT">
              <template #prepend>
                <!-- โลโก้จาก public/ ไม่ครอป ไม่ซูม -->
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { t } = useI18n()            // ใช้ t ตามเดิม
const router = useRouter()
const route  = useRoute()

// --- state ของคุณ (คงเดิม) ---
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
function goRegister() {
  router.push('/register') // นำไปยังหน้า register
}

function goForgotPassword() {
  router.push('/forgetpassword') // นำไปยังหน้า forget password
}

function loginWithKMUTT() { /* ... */ }

// ---- สลับภาษาแบบ “เปลี่ยน URL” ให้ i18n จัดการทุกอย่าง ----
// สมมติ defaultLocale = 'th' และ strategy = 'prefix_except_default'
function switchLang(code: 'th' | 'en') {
  const full = route.fullPath
  if (code === 'en') {
    // เพิ่ม /en ถ้ายังไม่มี
    if (!full.startsWith('/en')) router.push('/en' + full)
  } else {
    // กลับเป็น TH: ตัด /en ออก
    router.push(full.replace(/^\/en(\/|$)/, '/'))
  }
}

// กันพิมพ์ภาษาไทย
function blockThai(e: KeyboardEvent) { if (/[ก-๙]/.test(e.key)) e.preventDefault() }


// กดปุ่ม register แล้วปิด popup
const loginDialog = ref(true)
function handleRegisterClick() {
  goRegister()
  emits('close') // ปิด popup 
}


</script>


<style scoped>
.close-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
}
/* ---------- Layout ---------- */
.login-bg {
  min-height: 100vh; background: #0a0a1a;
  display: flex; align-items: center; justify-content: center; width: 100vw;
}
.login-box {
  width: 720px; max-width: 95vw; border-radius: 24px; background: #fff;
  box-shadow: 0 8px 40px rgba(0,0,0,0.18);
  padding: 48px 32px 32px; display: flex; flex-direction: column; align-items: center;
}
.login-title { font-size: 32px; font-weight: 700; color: #0c0c20; margin-bottom: 28px; text-align: center; }
.w-100 { width: 100%; }

/* ---------- Language switch ---------- */
.lang-switch {
  position: fixed; top: 32px; right: 48px; z-index: 2;
  display: flex; align-items: center; gap: 8px; color: #fff;
}
.lang-switch a { color: #fff; opacity: .7; cursor: pointer; text-decoration: none; }
.lang-switch a.active { opacity: 1; text-decoration: underline; }
.sep { opacity: .5; }

/* ---------- Fields & labels ---------- */
.field { width: 100%; margin-bottom: 18px; position: relative; }
.field-label { display: block; font-weight: 700; margin: 6px 0 10px; color: #222; }
.req { color: #e53935; margin-right: 6px; }

/* ---------- Full width v-input ---------- */
.field-full {
  width: 100%;
  max-width: 100% !important;  /* ตัดค่า default 344px ของ Vuetify */
  display: block;
}

/* ---------- Pill style (54px, radius 20px, shadow) ---------- */
.pill-input :deep(.v-field) {
  width: 100%; max-width: 100%;
  position: relative; border-radius: 20px; overflow: hidden;
  height: 54px; min-height: 54px;
  background: #fff; border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 16px 36px rgba(0,0,0,0.12);
  box-sizing: border-box;
}
.pill-input :deep(.v-field.v-field--focused) { box-shadow: 0 22px 48px rgba(0,0,0,0.16); }
.pill-input :deep(.v-field__input) { height: 54px; align-items: center; padding: 0 18px; }
.pill-input :deep(input::placeholder) { color: #c7c7c7; }

/* ไอคอนตา (จาก public/) */
.eye-icon {
  width: 22px; height: 22px; object-fit: contain; cursor: pointer; user-select: none;
}
.pill-input :deep(.v-field__append-inner) { padding-right: 14px; }

/* ---------- Error text ---------- */
:deep(.v-messages__message) { font-size: 13px; }

/* ---------- Actions ---------- */
.forgot-password {
  color: #222; font-size: 14px; font-weight: 700; letter-spacing: 0.02em;
  cursor: pointer; text-align: right; margin-top: 6px;
}
.login-btn {
  align-self: center; display: block; margin: 18px auto 0;
  width: 180px; height: 44px; border-radius: 22px; font-size: 16px; font-weight: 700;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  background: #222 !important; color: #fff !important;
}

/* ---------- Social ---------- */
.divider-text { text-align: center; font-size: 15px; margin-top: 26px; margin-bottom: 8px; color: #222; }
.social-login { width: 100%; max-width: 350px; margin: 0 auto; }
.social-btn {
  width: 100%; min-height: 56px; border-radius: 9999px;
  background-color: #fff !important; color: #222 !important; font-weight: 700;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12); justify-content: flex-start;
}
.kmutt-logo { height: 22px; width: auto; display: block; object-fit: contain; filter: none; margin-left: 2px; }
.social-btn-text { margin-left: 8px; }

/* ---------- Footer ---------- */
.register-link { margin-top: 18px; color: #222; font-size: 14px; font-weight: 700; text-align: center; display: flex; justify-content: center; gap: 6px; }
.register { text-decoration: underline; cursor: pointer; color: #222; }

/* ---------- Responsive ---------- */
@media (max-width: 600px) {
  .login-box { width: 99vw; padding: 16px 10px; border-radius: 16px; }
  .login-title { font-size: 22px; margin-bottom: 12px; }
  .pill-input :deep(.v-field) { height: 50px; min-height: 50px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
  .pill-input :deep(.v-field__input) { height: 50px; padding: 0 14px; }
  .login-btn { width: 100%; height: 40px; font-size: 14px; border-radius: 18px; margin-top: 12px; }
  .social-login { max-width: 100%; }
  .lang-switch { top: 12px; right: 12px; }
}
</style>
