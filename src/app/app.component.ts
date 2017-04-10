import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PapusBook A2';

  constructor(private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this.titleService.setTitle('Pokedex'));
  }
}
