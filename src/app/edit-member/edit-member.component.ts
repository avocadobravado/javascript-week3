import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember: FirebaseObjectObservable<any>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete): void {
    if(confirm('Are you sure you want to delete this item from the inventory?')){
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
