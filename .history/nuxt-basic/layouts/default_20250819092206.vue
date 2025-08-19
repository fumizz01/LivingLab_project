<template>
  <v-app>
    <!-- Menu -->
    <v-app-bar v-if="!isAuthPage" color="black" dark app>
      <div style="display: flex; align-items: center">
        <v-toolbar-title class="pl-5 pr-2 mr-2 font-weight-bold">
          <NuxtLink class="logo-link" :to="$localePath('index')">
            Living Lab
          </NuxtLink>
        </v-toolbar-title>
        <div
          class="nav-left d-none d-sm-flex"
          style="display: flex; align-items: center"
        >
          <v-btn class="nav-btn" variant="text" :to="$localePath('index')">{{
            t("nav.home")
          }}</v-btn>
          <v-btn class="nav-btn" variant="text" :to="$localePath('qrscan')">{{
            t("nav.qrScan")
          }}</v-btn>
          <v-btn class="nav-btn" variant="text" :to="$localePath('explore')">{{
            t("nav.explore")
          }}</v-btn>
        </div>
      </div>

      <!-- Spacer between logo and icon (responsive) -->
      <v-spacer style="flex: 100" />

      <!-- Search icon for mobile -->
      <button
        class="search-icon d-sm-none"
        @click="searchDialog = true"
        style="
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 8px;
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png"
          alt="search"
          width="24"
          height="24"
          style="display: block"
        />
      </button>
      <v-dialog v-model="searchDialog" width="400">
        <v-card class="custom-search-card">
          <v-card-text>
            <div class="dialog-search-bar" style="margin: 8px 0">
              <input
                class="search-input"
                type="text"
                v-model="searchText"
                :placeholder="t('pop-search.search')"
                style="width: 100%"
                @keyup.enter="handleSearch"
              />
              <v-btn text :to="$localePath('explore')" @click="handleSearch">{{
                t("pop-search.search-btn")
              }}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Hamburger icon for mobile -->
      <v-menu class="d-sm-none" offset-y location="top end">
        <template #activator="{ props }">
          <v-app-bar-nav-icon class="d-sm-none" v-bind="props" />
        </template>

        <v-list style="width: 100%">
          <v-list-item :to="$localePath('index')">{{
            t("nav.home")
          }}</v-list-item>
          <v-list-item :to="$localePath('qrscan')">{{
            t("nav.qrScan")
          }}</v-list-item>
          <v-list-item :to="$localePath('explore')">{{
            t("nav.explore")
          }}</v-list-item>
          
            <NuxtLink :to="$localePath('login')" style="text-decoration:none">
              <v-btn text color="white" style="width:100%">{{ t("nav.login-nav") }}</v-btn>
            </NuxtLink>
          <v-list-item>
            <v-btn-toggle
              class="lang-toggle"
              mandatory
              v-model="lang"
              style="margin: 0 auto; display: flex; justify-content: center"
            >
              <v-btn value="TH" class="lang-btn" @click="switchLang('th')"
                >TH</v-btn
              >
              <span
                style="
                  color: white;
                  font-weight: bold;
                  display: flex;
                  align-items: center;
                  margin: 0 8px;
                "
                >|</span
              >
              <v-btn value="EN" class="lang-btn" @click="switchLang('en')"
                >EN</v-btn
              >
            </v-btn-toggle>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />

      <!-- Search bar and buttons -->
      <div class="custom-search-bar d-none d-sm-flex">
        <button
          class="search-icon"
          @click="handleSearch"
          :disabled="!searchText"
          style="
            background: none;
            border: none;
            cursor: pointer;
            margin-right: 8px;
          "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search"
            width="24"
            height="24"
            style="display: block"
          />
        </button>
        <input
          class="search-input"
          type="text"
          v-model="searchText"
          :placeholder="t('nav.search')"
          @keyup.enter="handleSearch"
        />
      </div>
        <NuxtLink :to="$localePath('login')" class="d-none d-sm-flex" style="text-decoration:none">
          <v-btn text color="white">{{ t("nav.login-nav") }}</v-btn>
        </NuxtLink>
      <v-btn-toggle
        class="lang-toggle d-none d-sm-flex"
        mandatory
        v-model="lang"
        style="margin-left: 16px"
      >
        <v-btn value="TH" class="lang-btn" @click="switchLang('th')">TH</v-btn>
        <span
          style="
            color: white;
            font-weight: bold;
            display: flex;
            align-items: center;
          "
          >|</span
        >
        <v-btn value="EN" class="lang-btn" @click="switchLang('en')">EN</v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <!-- ...removed login dialog, now using /login page... -->

    <LangSwitcher v-if="isAuthPage" />
    <v-main :class="{ 'auth-bg': isAuthPage }">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const searchDialog = ref(false);
const searchText = ref("");
const router = useRouter();

const { t, locale } = useI18n();
const lang = ref(locale.value === "en" ? "EN" : "TH");
const route = useRoute();

import { computed } from "vue";

const authPages = ["/login", "/register", "/forgetpassword", "/resetpassword", "/verifycode"];
const isAuthPage = computed(() => {
  const path = route.path.toLowerCase();
  return authPages.some(p => path === p || path.startsWith(`/en${p}`));
});

function handleSearch() {
  searchDialog.value = false;
  const path =
    locale.value === "th"
      ? `/en/explore?search=${encodeURIComponent(searchText.value)}`
      : `/explore?search=${encodeURIComponent(searchText.value)}`;
  router.push(path);
  searchText.value = ""; // Clear the input field after search
}

function switchLang(code: "th" | "en") {
  const full = route.fullPath;
  if (code === "en") {
    if (!full.startsWith("/en")) router.push("/en" + full);
    lang.value = "EN";
  } else {
    router.push(full.replace(/^\/en(\/|$)/, "/"));
    lang.value = "TH";
  }
}

watch(locale, (val) => {
  lang.value = val === "en" ? "EN" : "TH";
});

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap");

* {
  font-family: "Noto Sans Thai", sans-serif;
  margin: 0;
  padding: 0;
}

.auth-bg {
  background: #0a0a1a;
  min-height: 100vh;
}

.v-main {
  padding-top: 64px; /* typical app-bar height */
}
.v-main.auth-bg {
  background: #0a0a1a;
  min-height: 100vh;
  padding-top: 0 !important;
}

.logo-link {
  font-size: 24px;
  color: #ffffff; /* Change to your desired color */
  text-decoration: none;
  margin: 0 20px 0 20px;
}

.nav-left .nav-btn {
  margin-right: 20px;
}

.nav-left .nav-btn:last-child {
  margin-right: 0;
}

.dialog-search-bar {
  display: flex;
  align-items: center;
  background: #ededed; /* Inner gray */
  border-radius: 24px;
  padding: 4px 8px;
}

.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 38px;
  font-size: var(--v-btn-size);
  min-width: 64px;
  padding: 0 16px;
  border-radius: 24px;
}

.custom-search-bar {
  display: flex;
  align-items: center;
  background: #a5a2a2; /* Outer gray */
  border-radius: 32px;
  padding: 4px 12px 4px 8px;
  height: 48px;
  min-width: 200px;
  max-width: 270px;
}

.search-icon {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.search-input {
  border: none;
  outline: none;
  background: #ededed;
  border-radius: 24px;
  padding: 5px 16px;
  font-size: 1rem;
  width: 100%; /* Make input fill parent */
  color: #444;
  box-sizing: border-box; /* Prevent overflow */
}

.custom-search-card {
  border-radius: 24px !important;
  position: absolute;
  top: -42vh; /* Use a positive value for consistent positioning */
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  width: 100%; /* Responsive width */
  max-width: 768px; /* Limit width on large screens */
  margin: 0 auto;
  z-index: 9999;
  height: auto;
  max-height: 80vh;
}

.v-card-text {
  padding: 1px 8px !important;
}

.lang-toggle {
  background: #00000000;
  border-radius: 1px;
  padding: 1px 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.lang-btn {
  color: #ffffff !important;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 24px !important;
  min-width: 48px;
  transition: background 0.2s;
  background: rgb(0, 0, 0);
}

.lang-btn.v-btn--active {
  background: #0077ff !important;
  border-radius: 24px !important  ;
  color: #ffffff !important;
}

@media (max-width: 1028px) {
  .nav-left,
  .custom-search-bar,
  .d-sm-flex {
    display: none !important;
  }
  .d-sm-none {
    display: block !important;
  }
  .v-list-item--density-default.v-list-item--one-line {  
    min-height: 48px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 1028px;
    text-align: center;
  }
  .v-menu > .v-overlay__content > .v-card,
  .v-menu > .v-overlay__content > .v-sheet,
  .v-menu > .v-overlay__content > .v-list {
    background: rgb(0, 0, 0);
    border-radius: inherit;
    overflow: auto;
    height: 100%;
    color: #ffffff;
  }
}
</style>
