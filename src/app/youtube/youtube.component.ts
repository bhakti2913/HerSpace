import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import{ YoutubeService } from 'src/app/services/youtube.service'
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  title ="App Youtube";
  appYoutube =[
    {
      name:"Item 1",
      slug:"Item-1",
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WSynJOwjLIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ]
  user: any;
  channels:any;
  @ViewChild('videoName') videoName!: ElementRef;

  constructor(private as: AuthService, private router: Router,private youtube:YoutubeService) { }

  ngOnInit(): void 
  {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
      this.getChannels();
    });
  }

  getChannels()
  {
    this.youtube.getChannels("menstruation").subscribe((data:any) => {
      console.log(data)
      this.channels = data.items
    })
  

  }

  getdata(){
    var videoName = this.videoName.nativeElement.value
    this.youtube.getChannels(videoName).subscribe((data:any) => {
      console.log(data)
      this.channels = data.items
  })
}
}
