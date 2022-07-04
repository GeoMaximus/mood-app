import { Component, OnInit } from '@angular/core';
import { Mood } from 'src/app/models/mood';
import { MoodService } from 'src/app/shared/mood.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mood: Mood = new Mood;
  constructor(private moodService: MoodService) { }

  
  ngOnInit(): void {
  }

  toggleSize() {

  }

  setValue(value: number) {
    this.mood.value = value;
  }

  setJustification(justification: string) {
    this.mood.justification = justification;
  }

  setImprovment(improvment: string) {
    this.mood.improvment = improvment;
  }

  setDate() {
    this.mood.date = new Date();
  }

  ifSubmitPressed() {
    this.setDate();
    console.log(this.mood);
    this.moodService.submitMood(this.mood).subscribe(date => {alert("success sign up")}, error => alert("somethings wrong"));
  }

}
