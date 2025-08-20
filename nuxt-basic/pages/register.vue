<template>
  <v-app>
    <v-main>
      <div class="register-bg">
        <v-btn icon class="close-btn" @click="goHome">
          <v-icon>mdi-close</v-icon>
        </v-btn>
  <!-- Language switcher component -->
  <LangSwitcher />

        <div class="register-box">
          <h1 class="register-title">{{ t("register.title") }}</h1>

          <v-form @submit.prevent="onSubmit" class="w-100">
            <v-row>
              <!-- First Name -->
              <v-col cols="12" md="6">
                <div class="field">
                  <label class="field-label"
                    ><span class="req">*</span>
                    {{ t("register.firstName") }}</label
                  >
                  <v-text-field
                    v-model="firstName"
                    :placeholder="t('register.firstNamePlaceholder')"
                    variant="solo"
                    dense
                    hide-details="auto"
                    class="pill-input field-full"
                    @blur="() => onBlur('firstName')"
                    :error="touched.firstName && errors.firstName"
                    :error-messages="
                      touched.firstName && errors.firstName
                        ? t('register.errors.firstNameRequired')
                        : ''
                    "
                  />
                </div>
              </v-col>

              <!-- Last Name -->
              <v-col cols="12" md="6">
                <div class="field">
                  <label class="field-label"
                    ><span class="req">*</span>
                    {{ t("register.lastName") }}</label
                  >
                  <v-text-field
                    v-model="lastName"
                    :placeholder="t('register.lastNamePlaceholder')"
                    variant="solo"
                    dense
                    hide-details="auto"
                    class="pill-input field-full"
                    @blur="() => onBlur('lastName')"
                    :error="touched.lastName && errors.lastName"
                    :error-messages="
                      touched.lastName && errors.lastName
                        ? t('register.errors.lastNameRequired')
                        : ''
                    "
                  />
                </div>
              </v-col>
            </v-row>

            <!-- Username -->
            <div class="field">
              <label class="field-label"
                ><span class="req">*</span> {{ t("register.username") }}</label
              >
              <v-text-field
                v-model="username"
                @keypress="blockThai"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('register.usernamePlaceholder')"
                class="pill-input field-full"
                @blur="() => onBlur('username')"
                :error="touched.username && errors.username"
                :error-messages="
                  touched.username && errors.username
                    ? t('register.errors.usernameRequired')
                    : ''
                "
              />
            </div>

            <!-- Email -->
            <div class="field">
              <label class="field-label"
                ><span class="req">*</span> {{ t("register.email") }}</label
              >
              <v-text-field
                v-model="email"
                @keypress="blockThai"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('register.emailPlaceholder')"
                class="pill-input field-full"
                @blur="() => onBlur('email')"
                :error="touched.email && !!emailError"
                :error-messages="touched.email ? emailError : ''"
              />
            </div>

            <!-- Password -->
            <div class="field">
              <label class="field-label"
                ><span class="req">*</span> {{ t("register.password") }}</label
              >
              <v-text-field
                v-model="password"
                @keypress="blockThai"
                :type="showPassword ? 'text' : 'password'"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('register.passwordPlaceholder')"
                class="pill-input field-full"
                @blur="() => onBlur('password')"
                :error="touched.password && errors.password"
                :error-messages="
                  touched.password && errors.password
                    ? t('register.errors.passwordRequired')
                    : ''
                "
              >
                <template #append-inner>
                  <img
                    :src="showPassword ? '/hidden.png' : '/eye.png'"
                    :alt="
                      showPassword
                        ? t('register.hidePasswordAlt')
                        : t('register.showPasswordAlt')
                    "
                    class="eye-icon"
                    role="button"
                    tabindex="0"
                    @click="showPassword = !showPassword"
                    @keydown.enter.prevent="showPassword = !showPassword"
                    @keydown.space.prevent="showPassword = !showPassword"
                  />
                </template>
              </v-text-field>

              <!-- Password Strength -->
              <PasswordRules :password="password" />
            </div>

            <!-- Confirm Password -->
            <div class="field">
              <label class="field-label"
                ><span class="req">*</span>
                {{ t("register.confirmPassword") }}</label
              >
              <v-text-field
                v-model="confirmPassword"
                @keypress="blockThai"
                :type="showConfirm ? 'text' : 'password'"
                variant="solo"
                flat
                hide-details="auto"
                :placeholder="t('register.confirmPasswordPlaceholder')"
                class="pill-input field-full"
                @blur="() => onBlur('confirmPassword')"
                :error="touched.confirmPassword && !!confirmError"
                :error-messages="touched.confirmPassword ? confirmError : ''"
              >
                <template #append-inner>
                  <img
                    :src="showConfirm ? '/hidden.png' : '/eye.png'"
                    :alt="
                      showConfirm
                        ? t('register.hidePasswordAlt')
                        : t('register.showPasswordAlt')
                    "
                    class="eye-icon"
                    role="button"
                    tabindex="0"
                    @click="showConfirm = !showConfirm"
                    @keydown.enter.prevent="showConfirm = !showConfirm"
                    @keydown.space.prevent="showConfirm = !showConfirm"
                  />
                </template>
              </v-text-field>
            </div>

            <!-- Submit -->
            <v-btn
              class="register-btn"
              color="primary"
              type="submit"
              rounded="xl"
            >
              {{ t("register.registerButton") }}
            </v-btn>
          </v-form>

          <div class="divider-text">{{ t("register.loginWithOther") }}</div>
          <v-divider class="my-4" />

          <!-- Social: KMUTT -->
          <div class="social-login">
            <v-btn
              color="white"
              class="social-btn"
              rounded="xl"
              @click="registerWithKMUTT"
            >
              <template #prepend>
                <img
                  src="/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png"
                  alt="KMUTT"
                  class="kmutt-logo"
                />
              </template>
              <span class="social-btn-text">{{
                t("register.loginWithKMUTT")
              }}</span>
            </v-btn>
          </div>

          <div class="register-link">
            <span>{{ t("register.haveAccount") }}</span>
            <span class="register" @click="goLogin">{{
              t("register.gotoLogin")
            }}</span>
          </div>
        </div>

        <v-dialog v-model="loginDialog" fullscreen persistent>
          <v-card>
            <login @close="loginDialog = false" />
          </v-card>
        </v-dialog>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter,} from 'vue-router'
import PasswordRules from '../components/PasswordRules.vue';

const { t, locale } = useI18n({ useScope: 'global' })
const router = useRouter()

// form state
const firstName = ref("");
const lastName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const showPassword = ref(false);
const showConfirm = ref(false);
const loginDialog = ref(false);

// errors as booleans (reactive with i18n)
const errors = ref<Record<string, boolean>>({
  firstName: false,
  lastName: false,
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
});

const touched = ref<Record<string, boolean>>({
  firstName: false,
  lastName: false,
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
});

function onBlur(field: keyof typeof touched.value) {
  touched.value[field] = true;
  validate();
}

// computed error messages (reactive with locale)
const emailError = computed(() => {
  if (!touched.value.email) return "";
  if (!email.value) return t("register.errors.emailRequired");
  // basic email pattern
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  return ok ? "" : t("register.errors.emailInvalid");
});

const confirmError = computed(() => {
  if (!touched.value.confirmPassword) return "";
  if (!confirmPassword.value) return t("register.errors.confirmRequired");
  return confirmPassword.value === password.value
    ? ""
    : t("register.errors.passwordNotMatch");
});

function validate() {
  errors.value.firstName = !firstName.value;
  errors.value.lastName = !lastName.value;
  errors.value.username = !username.value;
  errors.value.password = !password.value;
  return (
    !errors.value.username &&
    !errors.value.password &&
    !emailError.value &&
    !confirmError.value
  );
}

async function onSubmit() {
  // mark all touched
  Object.keys(touched.value).forEach(
    (k) => (touched.value[k as keyof typeof touched.value] = true)
  );
  if (validate()) {
    // ส่งข้อมูลไป backend
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ /* ข้อมูลฟอร์ม */ })
    });
    const data = await res.json();
    if (data.success) {
      // สมัครสำเร็จ ไปหน้า login Azure ทันที
      window.location.href = '/api/auth/azure';
    } else {
      // แสดง error
    }
  }
}

function localePath(path: string) {
  // ถ้า locale เป็น en ให้เติม /en นำหน้า path
  return locale.value === 'en' ? `/en${path.startsWith('/') ? path : '/' + path}` : path
}

function goLogin() {
  router.push(localePath('/login'))
}

function goHome() {
  router.push(localePath('/'))
}

function registerWithKMUTT() {
  // TODO: SSO flow
  router.push(localePath('/sso')) // ตัวอย่าง SSO path
}

// block Thai typing (for username; remove on email/password if you want)
function blockThai(e: KeyboardEvent) {
  if (/[ก-๙]/.test(e.key)) e.preventDefault();
}
</script>

<style scoped>
/* ---- Layout (reuse from login) ---- */
.register-bg{
  min-height:100vh;
  background:#0a0a1a;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100vw
}
/* ---- Layout (reuse from login) ---- */
.register-box{
  width:720px;
  max-width:95vw;
  border-radius:24px;
  background:#fff;
  box-shadow:0 8px 40px rgba(0,0,0,.18);
  padding:48px 32px 32px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:100px;
  margin-bottom:100px;
}
.register-title{
  font-size:32px;
  font-weight:700;
  color:#0c0c20;
  margin-bottom:28px;
  text-align:center;
}
.w-100{
  width:100%;
}
/* ---- Fields ---- */
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

/* full width override */
.field-full{
  width:100%;
  max-width:100%!important;
  display:block
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
  box-shadow: 0 22px 48px rgba(0,0,0,0.16); 
}
.pill-input :deep(.v-field__input) { 
  height: 54px; 
  align-items: center; 
  padding: 0 18px; 
}
.pill-input :deep(input) {
  height: 100%;
  line-height: 54px;
  padding: 0;
  box-sizing: border-box;
}
.pill-input :deep(input::placeholder) { 
  color: #c7c7c7; 
  line-height: 54px;
  height: 100%;
  vertical-align: middle;
  opacity: 1;
}
.pill-input :deep(.v-field__append-inner) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.eye-icon{
  width:22px;
  height:22px;
  object-fit:contain;
  cursor:pointer;
  user-select:none;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ---- Buttons ---- */
.register-btn{
  align-self:center;
  display:block;
  margin:18px auto 0;
  width:220px;
  height:44px;
  border-radius:22px;
  font-size:16px;
  font-weight:700;
  box-shadow:0 4px 20px rgba(0,0,0,.1);
  background:#222!important;
  color:#fff!important
}

.divider-text{
  text-align:center;
  font-size:15px;
  margin-top:26px;
  margin-bottom:8px;
  color:#222;
}

/* ---- Social ---- */
.social-login{
  width:100%;
  max-width:350px;
  margin:0 auto;
}

.social-btn{
  width:100%;
  min-height:56px;
  border-radius:9999px;
  background:#fff!important;
  color:#222!important;
  font-weight:700;
  box-shadow:0 8px 30px rgba(0,0,0,.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.kmutt-logo{
  height:45px;
  width:auto;
  display:block;
  object-fit:contain;
  filter:none;
  margin-left:2px
}
.social-btn-text{
  text-align: center;
  width: 100%
}

/* ---- Footer ---- */
.register-link{
  margin-top:18px;
  color:#222;
  font-size:14px;
  font-weight:700;
  text-align:center;
  display:flex;
  justify-content:center;
  gap:6px
}
.register{
  text-decoration:underline;
  cursor:pointer;
  color:#222
}

/* ---- Responsive ---- */
@media (max-width:600px) {
  .register-box {
    width: 98vw;
    max-width: 99vw;
    padding: 8px 4px;
    border-radius: 12px;
    margin-top: 25px;
    margin-bottom: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,.10);
  }
  .register-title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .field-label {
    font-size: 13px;
    margin: 4px 0 6px;
  }
  .pill-input :deep(.v-field) {
    height: 38px;
    min-height: 38px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,.08);
  }
  .pill-input :deep(.v-field__input) {
    height: 38px;
    padding: 0 8px 18px;
    font-size: 13px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .pill-input :deep(input::placeholder) {
    font-size: 12px;
    line-height: 38px;
    height: 100%;
    vertical-align: middle;
    opacity: 1;
    display: flex;
    align-items: center;
    /* margin-bottom: 100px;  browser ไม่รองรับ */
  }
  .pill-input :deep(.v-field__append-inner) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .eye-icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-top: 0;
    margin-bottom: 20px; /* ขยับขึ้นบนเล็กน้อย */
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register-btn {
    height: 32px;
    font-size: 13px;
    border-radius: 14px;
    margin-top: 8px;
    width: 140px;
  }
  .divider-text {
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 4px;
  }
  .social-login {
    max-width: 220px;
    margin: 0 auto;
  }
  .social-btn {
    font-size: 15px;
    border-radius: 9999px;
    box-shadow: 0 2px 8px rgba(0,0,0,.08);
    padding: 0 12px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .kmutt-logo {
    height: 40px;
    margin-left: 0;
  }
  .social-btn-text {
    font-size: 13px;
    width: auto;
    min-width: 0;
    flex: 1;
    text-align: center;
    white-space: normal;

  }
  .register-link {
    font-size: 12px;
    margin-top: 8px;
    gap: 4px;
  }
  /* .lang-switch {
    top: 8px;
    right: 8px;
    font-size: 12px;
    gap: 4px;
  } */
  .close-btn {
    top: 8px;
    left: 8px;
    width: 32px;
    height: 32px;
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
