<template>
  <div>
    <div class="container">
      <h1 ref="name">Hello {{ student.name | truncate }}</h1>
      <p ref="age">You are {{ student.age }} years old!</p>
    </div>

    <div class="container">
      {{ refs }}
    </div>

    <div class="container">
      <ul v-for="item in items" :key="item.name">
        <li>{{ item.name }} : {{ item.quantity }}</li>
      </ul>
    </div>

    <div v-blink.value=100 class="container">{{ seconds }} : {{ count }}</div>

    <div class="container">
      <button @click="incrementAge">+age</button>
      <button @click.once="incrementAge">+age once</button>
    </div>

    <div class="container">
      <input type="text" v-model="student.name" @keyup.enter="nameFilled" />
    </div>

    <div class="container">
      {{ timeCounter }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

const NAME_LENGTH = 10;

Vue.directive('blink', {
  bind(el, binding) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden'; // eslint-disable-line no-param-reassign
    }, binding.value || 500);
  },
});

export default {
  mounted() {
    console.log('Component Mounted');
    Vue.nextTick(() => {
      console.log('DOM is ready');
    });
  },
  created() {
    setInterval(() => {
      this.seconds = new Date().getSeconds();
    }, 1000);
  },
  filters: {
    truncate(value) {
      return value.length > NAME_LENGTH
        ? `${value.slice(0, NAME_LENGTH)}...`
        : value;
    },
  },
  methods: {
    incrementAge() {
      Vue.set(this.student, 'age', this.student.age + 1);
    },
    nameFilled() {
      console.log('name filled');
    },
  },
  computed: {
    timeCounter() {
      const today = new Date();
      return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    },
    refs() {
      return this.$refs;
    },
  },
  watch: {
    // seconds(val, oldVal) {
    seconds() {
      this.count = this.seconds;
    },
  },
  data() {
    return {
      message: 'Hello Vue!',
      student: {
        name: 'John Doe',
        age: 30,
      },
      seconds: 0,
      count: 0,
      items: [
        { name: 'One', quantity: 1 },
        { name: 'Two', quantity: 2 },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>
