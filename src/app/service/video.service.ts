import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private url:string="http://localhost:8080/";
  constructor(private http:Http) { }

  uploadVideo(file:File){
      const fd=new FormData();
      fd.append('file',file,file.name);
      return this.http.post(this.url.concat("upload/video"),fd);
  }

  videoList(){
      return this.http.get(this.url.concat("allVideo"));
  }
}
