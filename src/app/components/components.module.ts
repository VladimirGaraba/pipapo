import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PppHeaderComponent } from './ppp-header/ppp-header.component';
import { SuccessDlgComponent } from './success-dlg/success-dlg.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    declarations: [
        PppHeaderComponent,
        SuccessDlgComponent,
        PreOrderComponent,
        PhotoViewerComponent
    ],
    entryComponents: [
        SuccessDlgComponent,
        PreOrderComponent,
        PhotoViewerComponent
    ],
    exports: [
        PppHeaderComponent
    ]
})
export class ComponentsModule {}
