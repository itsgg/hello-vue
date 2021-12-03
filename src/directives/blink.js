import Vue from 'vue';

export default Vue.directive('blink', {
  bind(el, binding) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden'; // eslint-disable-line no-param-reassign
    }, binding.value || 500);
  },
});
