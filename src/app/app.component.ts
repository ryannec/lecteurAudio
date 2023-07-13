import { Component } from '@angular/core';
import { Track } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecteurAudio';
  playlist :string[] =[]
 
  

}
