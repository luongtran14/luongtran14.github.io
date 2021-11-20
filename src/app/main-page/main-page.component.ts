import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  InfoList = {
    Facebook: {
      url: 'https://www.facebook.com/profile.php?id=100009389465178',
      icon: 'https://assets.production.linktr.ee/27b39c47d6c2441d0d9a82010d0eaeed8d914018/icons/tabler-icons/brand-facebook.svg',
    },
    Youtube: {
      url: '',
      icon: 'https://assets.production.linktr.ee/27b39c47d6c2441d0d9a82010d0eaeed8d914018/icons/tabler-icons/brand-youtube.svg'
    },
    Linkedin: {
      url: '',
      icon: 'https://assets.production.linktr.ee/27b39c47d6c2441d0d9a82010d0eaeed8d914018/icons/tabler-icons/brand-linkedin.svg'
    },
    Mail: {
      url: '',
      icon: 'https://assets.production.linktr.ee/27b39c47d6c2441d0d9a82010d0eaeed8d914018/icons/tabler-icons/mail.svg'
    },
    PhoneNumber: {
      url: '',
      icon: ''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
