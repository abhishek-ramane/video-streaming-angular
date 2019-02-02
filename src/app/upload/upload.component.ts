import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private service:VideoService) { }
  file:File;
  ngOnInit() {
  }

  videoSelected(event){
    this.file=event.target.files[0];
    console.log("File Updated "+event.target.files[0].name);
  }

  uploadFile(){
    this.service.uploadVideo(this.file).subscribe(res=>{
      console.log(res);
    })
  }

}
