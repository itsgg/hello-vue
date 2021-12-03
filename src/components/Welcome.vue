<template>
  <div>
    <div class="container">
      <h1>Hello {{ student.name }}!</h1>
      <p>You are {{ student.age }} years old!</p>
    </div>

    <div class="container">
      <ul v-for="item in items" :key="item.name">
        <li>{{ item.name }} : {{ item.quantity }}</li>
      </ul>
    </div>

    <div class="container">
      {{ seconds }}
    </div>

    <div class="container">
      <button @click="incrementAge">+age</button>
    </div>

    <div class="container">
      <input type="text" v-model="message" /> {{ message }}
    </div>

    <div class="container">
      {{ timeCounter }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  created() {
    setInterval(() => {
      this.seconds = new Date().getSeconds();
    }, 1000);
  },
  methods: {
    incrementAge() {
      Vue.set(this.student, 'age', this.student.age + 1);
    },
  },
  computed: {
    timeCounter() {
      const today = new Date();
      return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
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
      items: [
        {
          name: 'One',
          quantity: 1,
        },
        {
          name: 'Two',
          quantity: 2,
        },
        {
          name: 'Three',
          quantity: 3,
        },
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
