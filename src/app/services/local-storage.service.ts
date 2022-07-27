import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  coords: Array<any>;
  key: string = "coords"

  constructor() {
    this.coords = JSON.parse(localStorage.getItem(this.key) as string) || [];
  }

  addItem(item: any) {
    this.coords.push(item)
    localStorage.setItem(this.key, JSON.stringify(this.coords))
  }

  removeItem(item: any) {
    localStorage.setItem(this.key, JSON.stringify(this.coords.filter(el => el !== item)))
  }

}
