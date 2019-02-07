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
  blobUrl:string=null;
  ngOnInit() {
    this.streamVideo();
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

  streamVideo(){
    this.service.getStream().subscribe((response)=>{
      let blob= response._body;
      this.blobUrl=window.top.URL.createObjectURL(blob);
      console.log("blob URL="+this.blobUrl);
    });
  }

}
