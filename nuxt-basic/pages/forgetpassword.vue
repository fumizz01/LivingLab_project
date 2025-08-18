<template>
  <v-app>
    <v-main>
      <div class="forget-bg">
        <v-btn icon class="close-btn" @click="goHome">
          <v-icon>mdi-close</v-icon>
        </v-btn>
  <!-- Language switcher component -->
  <LangSwitcher />

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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n({ useScope: 'global' })
const router = useRouter()


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

function localePath(path: string) {
  // ถ้า locale เป็น en ให้เติม /en นำหน้า path
  return locale.value === 'en' ? `/en${path.startsWith('/') ? path : '/' + path}` : path
}

function goHome() {
  router.push(localePath('/'))
}

function goLogin() {
  router.push(localePath('/login'))
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
    height: 40px;
    font-size: 14px;
    border-radius: 18px;
    margin-top: 12px;
  }
}

.close-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 20;
  background: rgb(255, 255, 255);
}
</style>
