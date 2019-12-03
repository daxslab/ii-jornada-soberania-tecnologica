import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote-links',
  templateUrl: './vote-links.component.html',
  styleUrls: ['./vote-links.component.scss'],
})
export class VoteLinksComponent implements OnInit {

  @Input()
  conference;

  constructor() { }

  ngOnInit() {}

}
