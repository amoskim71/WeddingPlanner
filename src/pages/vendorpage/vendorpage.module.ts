import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorpagePage } from './vendorpage';

@NgModule({
  declarations: [
    VendorpagePage,
  ],
  imports: [
    IonicPageModule.forChild(VendorpagePage),
  ],
})
export class VendorpagePageModule {}
