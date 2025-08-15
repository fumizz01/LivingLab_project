<template>
  <v-app>
    <v-main>
      <div class="forget-bg">
        <!-- Language switch -->
        <div class="lang-switch">
          <a class="lang-btn" @click.prevent="switchLang('th')">TH</a>
          <span class="sep">|</span>
          <a class="lang-btn" @click.prevent="switchLang('en')">EN</a>
        </div>

        <div class="forget-box">
          <h1 class="forget-title">{{ t('forgetPassword.title') }}</h1>

          <v-form @submit.prevent="onSubmit" class="w-100">
            <!-- Email -->
            <div class="field">
              <label :id="ids.email" class="field-label">
                <span class="req">*</span> {{ t('forgetPassword.email') }}
              </label>

              <v-text-field
                v-model="email"
                :aria-labelledby="ids.email"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('forgetPassword.emailPlaceholder')"
                class="pill-input field-full"
                @blur="onBlur('email')"
                :error="touched.email && !!errors.email"
                :error-messages="touched.email && errors.email ? t('forgetPassword.errors.emailRequired') : ''"
              />
            </div>

            <!-- Submit button -->
            <v-btn class="forget-btn" color="primary" type="submit" rounded="xl">
              {{ t('forgetPassword.resetButton') }}
            </v-btn>
          </v-form>

          <div class="back-login" @click="goLogin">
            {{ t('forgetPassword.backToLogin') }}
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

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

// Form state
const email = ref('')
const errors = ref({ email: false })
const touched = ref({ email: false })
const ids = { email: 'lbl-email' }

function onBlur(field: 'email') {
  touched.value[field] = true
  validate()
}

function validate() {
  errors.value.email = !email.value || !email.value.includes('@')
  return !errors.value.email
}

function onSubmit() {
  touched.value.email = true
  if (validate()) {
    // TODO: Reset password logic
  }
}

function goLogin() {
  router.push('/login')
}

// Switch language
function switchLang(code: 'th' | 'en') {
  const full = route.fullPath
  if (code === 'en') {
    if (!full.startsWith('/en')) router.push('/en' + full)
  } else {
    router.push(full.replace(/^\/en(\/|$)/, '/'))
  }
}
</script>

<style scoped>
/* ---------- Layout ---------- */
.forget-bg {
  min-height: 100vh;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.forget-box {
  width: 720px;
  max-width: 95vw;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  padding: 48px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forget-title {
  font-size: 32px;
  font-weight: 700;
  color: #0c0c20;
  margin-bottom: 28px;
  text-align: center;
}
.w-100 {
  width: 100%;
}

/* ---------- Language switch ---------- */
.lang-switch {
  position: fixed;
  top: 32px;
  right: 48px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
}
.lang-switch a {
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
}
.lang-switch a.active {
  opacity: 1;
  text-decoration: underline;
}
.sep {
  opacity: 0.5;
}

/* ---------- Fields & labels ---------- */
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

/* ---------- Full width v-input ---------- */
.field-full {
  width: 100%;
  max-width: 100% !important;
  display: block;
}

/* ---------- Pill style (54px, radius 20px, shadow) ---------- */
.pill-input :deep(.v-field) {
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 54px;
  min-height: 54px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
}
.pill-input :deep(.v-field.v-field--focused) {
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.16);
}
.pill-input :deep(.v-field__input) {
  height: 54px;
  align-items: center;
  padding: 0 18px;
}
.pill-input :deep(input::placeholder) {
  color: #c7c7c7;
}

/* ---------- Actions ---------- */
.forget-btn {
  align-self: center;
  display: block;
  margin: 18px auto 0;
  width: 180px;
  height: 44px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #222 !important;
  color: #fff !important;
}
.back-login {
  margin-top: 24px;
  color: #222;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

/* ---------- Responsive ---------- */
@media (max-width: 600px) {
  .forget-box {
    width: 99vw;
    padding: 16px 10px;
    border-radius: 16px;
  }
  .forget-title {
    font-size: 22px;
    margin-bottom: 12px;
  }
  .pill-input :deep(.v-field) {
    height: 50px;
    min-height: 50px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  .pill-input :deep(.v-field__input) {
    height: 50px;
    padding: 0 14px;
  }
  .forget-btn {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-radius: 18px;
    margin-top: 12px;
  }
}
</style>
