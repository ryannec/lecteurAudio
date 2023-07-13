import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() playlist:string[]=[] 
  audio = new Audio();
  tracktime:number | undefined;
  duration = this.audio.duration
  secondes :number | undefined;
  // this.audio. = this.buildDuration(this.duration);
  
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
  buildDuration(duration:number){
  const  minutes = Math.floor(duration / 60);
  const reste = duration % 60;
  const secondes = String(this.secondes).padStart(2, "0");
  return minutes + ":" + secondes 
  }
  

}
