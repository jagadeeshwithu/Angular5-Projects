import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class MailItemRouteGuard implements CanActivate{
    constructor(private router: Router){}

    canActivate(currentRouteSnapShot: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
        let childId: number = currentRouteSnapShot.params["id"];
        return ((childId >= 0) && (childId < 100));
    }
}