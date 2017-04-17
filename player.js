class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
  }
  play(){
    console.log('Playing '+this.currentSong);
  }
  //TODO: Add Pause()
  pause(){
    console.log('Pausing song');
  }
  //TODO: Add Stop()

  add(song){
    this.playlist.push(song);
  }
}
