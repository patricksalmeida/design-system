import { Component, Input } from '@angular/core';
import { ButtonProps } from '@design-system/core';

@Component({
  selector: 'design-system-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements ButtonProps {

  @Input() label = '';
  @Input() isDisabled = false;

}
