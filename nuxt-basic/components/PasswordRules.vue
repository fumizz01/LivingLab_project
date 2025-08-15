<template>
  <div v-if="password" class="password-strength-wrapper">
    <!-- Strength label with background -->
    <div :class="['strength-label', strengthClass]">{{ strengthLabel }}</div>

    <!-- Password criteria -->
    <ul class="password-criteria">
      <li
        v-for="(criteria, index) in criteriaList"
        :key="index"
        :class="{ 'criteria-met': criteria.met }"
      >
        <span class="criteria-icon">
          <v-icon :color="criteria.met ? 'success' : 'grey'">
            {{ criteria.met ? 'mdi-check-circle' : 'mdi-circle-outline' }}
          </v-icon>
        </span>
        <span class="criteria-text">{{ criteria.label }}</span>
      </li>
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
    strengthColor() {
      if (this.strength === 4) return 'success';
      if (this.strength === 3) return 'warning';
      if (this.strength >= 1) return 'error';
      return 'grey';
    },
    strengthClass() {
      if (this.strength === 4) return 'strength-strong';
      if (this.strength === 3) return 'strength-medium';
      if (this.strength >= 1) return 'strength-weak';
      return 'strength-none';
    },
    criteriaList() {
      return [
        {
          label: '8 - 20 ตัวอักษร',
          met: this.password.length >= 8 && this.password.length <= 20
        },
        {
          label: 'ต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว',
          met: /[A-Z]/.test(this.password)
        },
        {
          label: 'ต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว',
          met: /[a-z]/.test(this.password)
        },
        {
          label: 'ต้องมีตัวเลขอย่างน้อย 1 ตัว',
          met: /[0-9]/.test(this.password)
        }
      ];
    }
  }
};
</script>

<style scoped>
.password-strength-wrapper {
  width: 100%;
  margin-bottom: 16px;
}

.strength-label {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: 16px;
  /* display: inline-block; */
  color: #fff; /* Default text color */
}
.strength-strong {
  background-color: #43d477; /* สีเขียวสำหรับ STRONG */
}
.strength-medium {
  background-color: #fbc02d; /* สีเหลืองสำหรับ MEDIUM */
}
.strength-weak {
  background-color: #e53935; /* สีแดงสำหรับ WEAK */
}
.strength-none {
  background-color: #bdbdbd; /* สีเทาสำหรับไม่มีรหัสผ่าน */
}
.password-criteria {
  list-style: none;
  padding: 0;
  margin: 0;
}
.password-criteria li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.criteria-icon {
  margin-right: 8px;
}
.criteria-text {
  font-size: 14px;
  color: #333;
}
.criteria-met .criteria-text {
  color: #43d477; /* สีเขียวเมื่อเงื่อนไขผ่าน */
  font-weight: bold;
}
.criteria-met v-icon {
  color: #43d477;
}
</style>
