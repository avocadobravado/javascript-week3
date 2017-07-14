import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MemberService]
})

export class ListComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: MemberService){}

  ngOnInit(){
    this.members = this.albumService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
