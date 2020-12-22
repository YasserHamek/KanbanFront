import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './component/item/item.component';
import { HttpClientModule } from '@angular/common/http';

//primeng
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';    
import {ButtonModule} from 'primeng/button';

//pipe
import { WaitingPipe } from './pipe/waiting.pipe';
import { ProcessingPipe } from './pipe/processing.pipe';
import { DonePipe } from './pipe/done.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    WaitingPipe,
    ProcessingPipe,
    DonePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
