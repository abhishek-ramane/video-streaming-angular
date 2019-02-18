import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { VideoService } from './service/video.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
