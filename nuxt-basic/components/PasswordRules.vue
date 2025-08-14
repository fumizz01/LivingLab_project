<template>
  <div class="password-strength-wrapper" v-if="password">
    <div :class="['strength-bar', strengthClass]">{{ strengthLabel }}</div>
    <ul class="password-criteria">
      <li :class="{'criteria-met': password.length >= 8 && password.length <= 20}">8 - 20 ตัวอักษร</li>
      <li :class="{'criteria-met': /[A-Z]/.test(password)}">ต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว</li>
      <li :class="{'criteria-met': /[a-z]/.test(password)}">ต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว</li>
      <li :class="{'criteria-met': /[0-9]/.test(password)}">ต้องมีตัวเลขอย่างน้อย 1 ตัว</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PasswordRules',
  props: {
    password: {
      type: String,
      required: true
    }
  },
  computed: {
    strength() {
      let score = 0;
      if (this.password.length >= 8 && this.password.length <= 20) score++;
      if (/[A-Z]/.test(this.password)) score++;
      if (/[a-z]/.test(this.password)) score++;
      if (/[0-9]/.test(this.password)) score++;
      return score;
    },
    strengthLabel() {
      if (this.strength === 4) return 'STRONG';
      if (this.strength === 3) return 'MEDIUM';
      if (this.strength >= 1) return 'WEAK';
      return '';
    },
    strengthClass() {
      if (this.strength === 4) return 'strong';
      if (this.strength === 3) return 'medium';
      if (this.strength >= 1) return 'weak';
      return '';
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700&family=Work+Sans:wght@600&display=swap');

.password-strength-wrapper {
  width: 100%;
  margin-bottom: 8px;
  /* margin-top: 8px; */
}
.strength-bar {
  width: 120px;
  padding: 5px 0;
  border-radius: 16px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #fff;
  font-family: Noto Sans Thai;
  letter-spacing: 1.4px;
  display: inline-block;
}
.strength-bar.strong {
  background: #22c522;
}
.strength-bar.medium {
  background: #fbc02d;
  color: #222;
}
.strength-bar.weak {
  background: #e53935;
}
.password-criteria {
  list-style: none;
  padding: 0;
  margin: 0 0 0 4px;
  font-size: 13px;
  color: #888;
}
.password-criteria li {
  margin-bottom: 2px;
  position: relative;
  padding-left: 18px;
}
.password-criteria li:before {
  content: '\2022';
  color: #bdbdbd;
  position: absolute;
  left: 0;
  font-size: 16px;
  top: 0;
}
.password-criteria .criteria-met {
  color: #43d477;
  font-weight: 700;
}
.password-criteria .criteria-met:before {
  content: '\2713';
  color: #43d477;
  font-size: 15px;
}
</style>
