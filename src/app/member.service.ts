import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {

  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
    }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string): FirebaseObjectObservable<any> {
    return this.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember: any){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
                                image: localUpdatedMember.image,
                                name: localUpdatedMember.name,
                                email: localUpdatedMember.email,
                                twitter: localUpdatedMember.twitter,
                                book: localUpdatedMember.twitter,
                                movie: localUpdatedMember.twitter,
                                description: localUpdatedMember.twitter
                               });
  }

  deleteMember(localMemberToDelete: any): void {
    const memberEntryInFirebase: FirebaseObjectObservable<any> = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}
