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

  //TODO: Add Stop()

  add(song){
    this.playlist.push(song);
  }
}
