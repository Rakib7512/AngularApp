import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Inject, PLATFORM_ID } from "@angular/core";
import { Observable } from "rxjs";


export class userGuardGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }





  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && this.authService.isUser()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
 
  }
 

