import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showVideo(vid) {console.log(vid)
      this.set('videoId', vid);
      this.set('modalIsOpen', true);
    }
  }   
});
