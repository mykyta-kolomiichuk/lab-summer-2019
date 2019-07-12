import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'lab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  phones: string[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.phones = this.route.snapshot.data.phones;
  }
}
