<template>
  <div class="image-container">
    <div class="head-dialog">
      <h1>{{ t('hero.title') }}</h1>
      <p>{{ t('hero.subtitle') }}</p>
      <button class="explore-button" @click="handleSearch()">
      <span>{{ t('hero.exploreButton') }}</span>
    </button>
    </div>

    <div class="intro-img">
      <img src="/public/intro_img.png" alt="intro image" class="intro-img"/>
    </div>

   
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n'


const searchDialog = ref(false);
const searchText = ref("");
const router = useRouter();
const { t, locale} = useI18n();


function handleSearch() {
  searchDialog.value = false;
  const path =
  locale.value === 'en'
    ? `/en/explore?search=${encodeURIComponent(searchText.value)}`
    : `/explore?search=${encodeURIComponent(searchText.value)}`;
  router.push(path);
  searchText.value = ""; // Clear the input field after search
}
</script>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  background: linear-gradient(to bottom, #000000 100%, #888888 100%);
  padding: 0 24px;
  box-sizing: border-box;
}

.head-dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 60px 12px 0;
  color: white;
  font-size: 1.6rem;
}

.head-dialog h1 {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #4f8cff, #1e40af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 24px #4f8cff, 0 0 48px #1e40af;
  animation: fadeInGlow 1.2s ease;
  margin-bottom: 12px;
}

@keyframes fadeInGlow {
  0% {
    opacity: 0;
    text-shadow: none;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 24px #4f8cff, 0 0 48px #1e40af;
    transform: translateY(0);
  }
}

.intro-img {
  order: 1;
  align-self: center;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 0;
}

.intro-img img {
  width: 500px;      /* Set your desired width */
  height: 500px;      /* Maintain aspect ratio */
  display: flex;   /* Remove inline spacing */
}

.explore-button {
  background: linear-gradient(90deg, #ffffff 0%, #00C6FF 100%);
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 24px;
  padding: 12px 45px;
  box-shadow: 0 4px 16px rgba(0, 119, 255, 0.15);
  cursor: pointer;
  transition: box-shadow 0.3s, background 0.2s, transform 0.2s;
  margin-top: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  order: 2;
}

.explore-button:hover {
  background: linear-gradient(90deg, #00C6FF 0%, #0077FF 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 0 48px #1e40af, 0 8px 24px rgba(0, 119, 255, 0.25);
}

@media (max-width: 1028px) {
  .image-container {
    flex-direction: column;
    padding: 24px 8px;
    min-height: 0;
  }
  .head-dialog {
    margin: 24px 0 24px 0;
    text-align: center;
    align-items: center;
  }

  .explore-button {
    order: 2; /* Move button after image and text */
    margin-top: 16px;
  }

 .intro-img {
    margin-bottom: 0;
    width: 300px;
    height: 300px;
    max-width: 90vw;
  }
  .intro-img img {
  max-width: 90vh;
  width: 300px;      
  height: 300px;      
  display: flex;   
}
}
</style>
