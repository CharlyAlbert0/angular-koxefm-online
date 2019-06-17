import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TestEsComponent} from './test-es/test-es.component';
import {ElasticsearchService} from './elasticsearch.service';

@NgModule({
  declarations: [
    AppComponent,
    TestEsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})

export class AppModule {}
