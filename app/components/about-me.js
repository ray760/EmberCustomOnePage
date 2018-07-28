import Component from '@ember/component';

export default Component.extend({
  actions: {
    openModal() {
      this.get('onOpen')();
    }
  }
});
