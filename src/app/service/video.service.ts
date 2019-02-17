import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private url:string="http://localhost:8080/upload/video";
  constructor(private http:Http) { }

  uploadVideo(file:File){
      const fd=new FormData();
      fd.append('file',file,file.name);
      return this.http.post(this.url,fd);
  }
}
