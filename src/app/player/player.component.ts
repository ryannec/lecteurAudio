import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() playlist:string[]=[] 
 audio = new Audio();
 



  playMusic(){
    this.audio.src = this.playlist[0];
 this.audio.load();
 this.audio.play();
 console.log(this.playlist);
 
  }
  pauseMusic(){
    this.audio.pause();
  }
  stopMusic(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  

}
