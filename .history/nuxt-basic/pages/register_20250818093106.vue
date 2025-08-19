<template>
  <v-app>
    <v-main>
      <div class="register-bg">
        <!-- Language switch -->
        <div class="lang-switch">
          <a
            class="lang-btn"
            :class="{ active: locale === 'th' }"
            @click.prevent="switchLang('th')"
            >TH</a
          >
          <span class="sep">|</span>
          <a
            class="lang-btn"
            :class="{ active: locale === 'en' }"
            @click.prevent="switchLang('en')"
            >EN</a
          >
        </div>

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
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import PasswordRules from "../components/PasswordRules.vue";

const { t, locale } = useI18n({ useScope: "global" });
const router = useRouter();
const route = useRoute();

// form state
const firstName = ref("");
const lastName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const showPassword = ref(false);
const showConfirm = ref(false);

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

function onSubmit() {
  // mark all touched
  Object.keys(touched.value).forEach(
    (k) => (touched.value[k as keyof typeof touched.value] = true)
  );
  if (validate()) {
    // TODO: submit register
  }
}

function goLogin() {
  loginDialog.value = true; // เปิด Login popup
}

function registerWithKMUTT() {
  // TODO: SSO flow
}

// switch language by URL (works with strategy: 'prefix_except_default', defaultLocale: 'th')
function switchLang(code: "th" | "en") {
  const full = route.fullPath;
  if (code === "en") {
    if (!full.startsWith("/en")) router.push("/en" + full);
  } else {
    router.push(full.replace(/^\/en(\/|$)/, "/"));
  }
}

// block Thai typing (for username; remove on email/password if you want)
function blockThai(e: KeyboardEvent) {
  if (/[ก-๙]/.test(e.key)) e.preventDefault();
}
</script>

<style scoped>
/* ---- Layout (reuse from login) ---- */
.register-bg {
  min-height: 100vh;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.register-box {
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
.register-title {
  font-size: 32px;
  font-weight: 700;
  color: #0c0c20;
  margin-bottom: 28px;
  text-align: center;
}
.w-100 {
  width: 100%;
}

/* ---- Language switch ---- */
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
.lang-btn {
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
}
.lang-btn.active {
  text-decoration: underline;
  opacity: 1;
}
.sep {
  opacity: 0.5;
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

.eye-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  cursor: pointer;
  user-select: none;
}

/* ---- Buttons ---- */
.register-btn {
  align-self: center;
  display: block;
  margin: 18px auto 0;
  width: 220px;
  height: 44px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

/* ---- Social ---- */
.social-login {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
.social-btn {
  width: 100%;
  min-height: 56px;
  border-radius: 9999px;
  background: #fff !important;
  color: #222 !important;
  font-weight: 700;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  justify-content: flex-start;
}
.kmutt-logo {
  height: 22px;
  width: auto;
  display: block;
  object-fit: contain;
  filter: none;
  margin-left: 2px;
}
.social-btn-text {
  margin-left: 8px;
}

/* ---- Footer ---- */
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

/* ---- Responsive ---- */
@media (max-width: 600px) {
  .register-box {
    width: 99vw;
    padding: 16px 10px;
    border-radius: 16px;
  }
  .register-title {
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
  .register-btn {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-radius: 18px;
    margin-top: 12px;
  }
  .lang-switch {
    top: 12px;
    right: 12px;
  }
}
</style>
