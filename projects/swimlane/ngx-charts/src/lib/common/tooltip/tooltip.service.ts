import { Injectable } from '@angular/core';
import { InjectionRegisteryService } from './injection-registery.service';
import { InjectionService } from './injection.service';
import { TooltipContentComponent } from './tooltip.component';
@Injectable({
  providedIn: 'root'
})
export class TooltipService extends InjectionRegisteryService<TooltipContentComponent> {
  type: any = TooltipContentComponent;

  constructor(injectionService: InjectionService) {
    super(injectionService);
  }
}
