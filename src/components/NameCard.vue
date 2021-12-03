<template>
  <div class="container">
    <h1 ref="name">Hello {{ student.name | truncate }}</h1>
    <p ref="age">You are {{ student.age }} years old!</p>
  </div>
</template>

<script>
const NAME_LENGTH = 10;

export default {
  name: 'NameCard',
  props: ['student'],
  filters: {
    truncate(value) {
      return value.length > NAME_LENGTH
        ? `${value.slice(0, NAME_LENGTH)}...`
        : value;
    },
  },
};
</script>
