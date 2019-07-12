import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateAboutService implements CanActivate {

  constructor() {}

  canActivate(): boolean {
    console.log('About: try to activate');
    return true;
  }
}
