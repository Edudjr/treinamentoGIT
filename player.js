class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
    this.state = 'STOPPED';
  }
  play(){
    console.log('Playing '+this.currentSong);
  }
  //TODO: Add Pause()
  pause(){
    console.log('Pausing song');
    this.state = 'PAUSED';
  }
  //TODO: Add Stop()
  stop(){
    console.log('Stopping song');
    this.state = 'STOPPED';
  }

  add(song){
    this.playlist.push(song);
  }
}
