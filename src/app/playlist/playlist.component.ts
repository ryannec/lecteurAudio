import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input() playlist:string[]=[] 
playMusic(index: number){
 let audio = new Audio()
 audio.src = this.playlist[index];
 audio.load();
  audio.play();
}
deleteOfPlaylist(index:number){
  // const index = this.playlist.indexOf(element)
this.playlist.splice(index ,1)
}
}
