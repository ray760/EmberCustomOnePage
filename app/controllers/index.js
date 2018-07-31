import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showVideo(vid) {
      this.set('videoId', vid);
      this.set('modalIsOpen', true);
    }
  }   
});
