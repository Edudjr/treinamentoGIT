class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
    this.state = 'STOPPED'
  }
  play(){
    console.log('Playing '+this.currentSong);
  }
  //TODO: Add Pause()
  pause(){
    console.log('Pausing song');
  }
  //TODO: Add Stop()
  stop(){
    console.log('Stopping song');
  }

  add(song){
    this.playlist.push(song);
  }
}
