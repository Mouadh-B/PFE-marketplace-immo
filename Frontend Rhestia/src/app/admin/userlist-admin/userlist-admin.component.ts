import {Component, OnInit} from '@angular/core';
import {UtilisateurServiceService} from "../../core/services/utilisateur-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-userlist-admin',
  templateUrl: './userlist-admin.component.html',
  styleUrls: ['./userlist-admin.component.scss']
})
export class UserlistAdminComponent implements OnInit{
  utilisateur: any[]=[]
  constructor(private listuser :UtilisateurServiceService) { }

  ngOnInit(): void {
    //get
    this.listuser.getUsers().subscribe((data:any)=>{
        this.utilisateur=data;
        console.log(this.utilisateur);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  blockUser(userId: number) {
    this.listuser.blockUser(userId)
      .subscribe(
        () => {
          this.ngOnInit();
          console.log('User blocked successfully');

          // Handle success or show a notification
        },
        error => {
          console.error('Error blocking user:', error);
          // Handle error or show an error message
        }
      );
  }

  // enableUser(user){
  //   this.usermangeService.enableUser(user).subscribe(
  //     () =>{this.ngOnInit();}
  //   );
  // }

  unblockUser(userId: number) {
    this.listuser.unblockUser(userId)
      .subscribe(
        () => {
          console.log('User unblocked successfully');
          this.ngOnInit();
          // Handle success or show a notification
        },
        error => {
          console.error('Error unblocking user:', error);
          // Handle error or show an error message
        }
      );

  }



  // deleteUser(userId: number) {
  //   this.listuser.deleteUser(userId)
  //     .subscribe(
  //       () => {
  //         Swal.fire('success','user  deleted','success');}
  //
  //         // Handle success or show a notification
  //     //   },
  //     //   (error)=>{
  //     //     Swal.fire('error','user not deleted','error')
  //     //   }
  //     );
  // }
  // deleteUser(userId: number) {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     this.listuser.deleteUser(userId).subscribe(
  //       () => {
  //         console.log('User deleted successfully');
  //         Swal.fire('success', 'User deleted', 'success');
  //         this.ngOnInit(); // Refresh the page by calling ngOnInit again
  //       },
  //       (error) => {
  //         console.error('Error deleting user:', error);
  //         Swal.fire('error', 'User not deleted', 'error');
  //       }
  //     );
  //   }
  // }
  deleteUser(userId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listuser.deleteUser(userId).subscribe(
          () => {
            console.log('User deleted successfully');
            Swal.fire('Success', 'User deleted', 'success');
            this.ngOnInit(); // Refresh the page by calling ngOnInit again
          },
          (error) => {
            console.error('Error deleting user:', error);
            Swal.fire('Success', 'User deleted', 'success');
          }
        );
      }
    });
  }

}
