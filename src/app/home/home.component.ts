import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  query=''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/search'], { queryParams: { q: this.query }});
  }

}
