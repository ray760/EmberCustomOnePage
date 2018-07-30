import Component from '@ember/component';

export default Component.extend({

  id: null,
  actions: {
    openModal(vidId) {
      this.get('onVidOpen')(vidId);
      this.get('onOpen')();
    }
  }
});
