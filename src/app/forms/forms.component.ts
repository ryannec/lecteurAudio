import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  url: boolean = true;
  @Input()
  playlist: string[] = [];

  urlForm = this.formBuilder.group({
    lienUrl: [''],
    lienFile: [''],
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmit() {
    if (this.url && this.urlForm.value.lienUrl) {
      this.playlist.push(this.urlForm.value.lienUrl);
    }
    this.urlForm.reset();
  }
  changeChoose() {
    this.url = !this.url;
  }
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    const fileName = file.name;
    const url = URL.createObjectURL(file);
this.playlist.push(url);
  }
}
