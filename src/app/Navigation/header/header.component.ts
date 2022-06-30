import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();
  // user$ = this.authService.currentUser$;
  user$ = this.usersService.currentUserProfile$;
  constructor(
    public authService: AuthService,
    private router: Router,
    public usersService: UsersService
  ) { }

  ngOnInit(): void {
  }
  onToggleOpenSidenav() {

    this.SideNavigationToggle.emit();

  }
  
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
}

}
