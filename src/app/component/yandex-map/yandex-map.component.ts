import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {YandexMapService} from "../../services/yandex-map.service";


@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent implements OnInit {

  @Input() latitude: any;
  @Input() longitude: any;
  @ViewChild('yamaps')
  el!: ElementRef;

  constructor(private yandexMap: YandexMapService) {
  }

  ngOnInit(): void {
    this.yandexMap.initMap(this.latitude, this.longitude)
  }
}
