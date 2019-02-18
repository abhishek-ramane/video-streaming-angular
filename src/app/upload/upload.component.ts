import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  isEmpty:boolean=true;
  videoList:any=[];

  constructor(private service:VideoService) {
    this.loadAllVideo();
  }
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

  loadAllVideo(){
    this.service.videoList().subscribe(responce=>{
      this.videoList= JSON.parse(responce._body);
      this.isEmpty = this.videoList.length > 0 ? true : false;
      console.log(this.videoList);
    });
  }

}
