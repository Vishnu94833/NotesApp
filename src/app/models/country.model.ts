import { Dropdown } from "./dropdown";

export class CountryDropdownModel extends Dropdown{
    constructor(value: string, label: string) {
        super();
        this.Value = value;
        this.Label = label;
      }
}