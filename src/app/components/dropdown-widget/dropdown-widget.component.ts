import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownWidgetModel } from './Model/dropdown-widget-model';
import _ from 'underscore';
import { DropdownWidgetComponentService } from './Service/dropdown-widget.component.service';
@Component({
  selector: 'dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.css'],
  providers: [DropdownWidgetComponentService]
})
export class DropdownWidgetComponent implements OnInit {
  @Input() myClass: string;
  @Input() datasource: any;
  @Input() selectedItem: any;
  @Input() displayKey: string;
  @Output() onDropdownSelect: EventEmitter<any> = new EventEmitter();

  public DropdownList: Array<DropdownWidgetModel>;
  public SelectedDropdownItem: DropdownWidgetModel;
  constructor(private _service: DropdownWidgetComponentService) {}

  ngOnInit() {
    console.log(this.datasource);
    
    this.DropdownList = this._service.GenerateCollection(this.datasource, this.displayKey);
    
    this.SelectedDropdownItem = _.first(this.DropdownList);

    if (this.selectedItem == null || this.selectedItem == undefined) {
      this.SelectedDropdownItem = _.first(this.DropdownList);
    } else {
      this.SelectedDropdownItem = this._service.FindSelectedItemFromCollection(
        this.DropdownList,
        this.selectedItem,
        this.displayKey
      );
    }
  }

  SelectItem(data: DropdownWidgetModel) {
    this.onDropdownSelect.emit(data.Item);
  }
}
