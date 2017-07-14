import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    // var newMember: Member = new Member(image, name, email, twitter, book, movie, description);
    var newMember: Member = new Member(name, name, name, name, name, name, name);
    this.memberService.addMember(newMember);
  }
}
