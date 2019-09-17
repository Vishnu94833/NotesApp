import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { DropdownWidgetModel } from '../Model/dropdown-widget-model';

@Injectable()
export class DropdownWidgetComponentService {
  public GenerateCollection(source: any, displayKey: string): DropdownWidgetModel[] {
    let list: Array<DropdownWidgetModel> = [];
    _.each(source, function(item: any, key) {
      let title = '';
      if (displayKey != undefined) {
        title = item[displayKey];
      } else {  
        title = item;
      }
      let dropdownWidgetModel = new DropdownWidgetModel(title, item);
      list.push(dropdownWidgetModel);
    });
    
    return list;
  }

  public FindSelectedItemFromCollection(list: Array<DropdownWidgetModel>,activeItem: any,displayKey: string): DropdownWidgetModel {
    let model: DropdownWidgetModel = null;
    model = _.find(list, function(item: DropdownWidgetModel) {
      return item.Title == activeItem[displayKey];
    });
    if (model == null || model == undefined) {
      console.log('@Input - ActiveItemOnInit has some invaild data...');
    }
    return model;
  }
}
