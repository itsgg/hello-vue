<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <p>You are {{ age }} years old!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ganesh Gunasegaran',
      age: 30,
    };
  },
};
</script>
