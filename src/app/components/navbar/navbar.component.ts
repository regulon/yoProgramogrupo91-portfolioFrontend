import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = '#Yo Programo 3ra edición';
  faCoffee = faCoffee;
  fhouse = faHouse;
  fenvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
