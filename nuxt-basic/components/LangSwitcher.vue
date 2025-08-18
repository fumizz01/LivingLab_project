<template>
  <div class="lang-switch">
    <a class="lang-btn" :class="{ active: locale === 'th' }" @click.prevent="switchLang('th')">TH</a>
    <span class="sep">|</span>
    <a class="lang-btn" :class="{ active: locale === 'en' }" @click.prevent="switchLang('en')">EN</a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { locale } = useI18n({ useScope: 'global' })
const router = useRouter()
const route = useRoute()

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
@media (max-width: 600px) {
  .lang-switch {
    top: 8px;
    right: 8px;
    font-size: 12px;
    gap: 4px;
  }
}
</style>
