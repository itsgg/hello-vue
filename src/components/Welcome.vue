<template>
  <div>
    {{ student }}

    <name-card :student="student">Name Card</name-card>

    <div class="container">
      {{ refs }}
    </div>

    <div class="container">
      <ul v-for="item in items" :key="item.name">
        <li>{{ item.name }} : {{ item.quantity }}</li>
      </ul>
    </div>

    <div v-blink.value="100" class="container">{{ seconds }} : {{ count }}</div>

    <div class="container">
      <button @click="incrementAge">+age</button>
      <button @click.once="incrementAge">+age once</button>
    </div>

    <div class="container">
      {{ timeCounter }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import NameCard from '@/components/NameCard';
import blink from '@/directives/blink';

export default {
  mixins: [blink],
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
  components: {
    NameCard,
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
