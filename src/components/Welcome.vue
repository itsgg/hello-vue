<template>
  <div>
    <h1>Hello {{ student.name }}!</h1>
    <p>You are {{ student.age }} years old!</p>
    <ul v-for="item in items" :key="item.name">
      <li>{{ item.name }} : {{ item.quantity }}</li>
    </ul>
    <p>{{ seconds }}</p>
    <button @click="incrementAge">+age</button>
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
  data() {
    return {
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
