import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories:any = ['mobile','Washing Manchines']
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  selectCategory(category:any) : void {
    console.log(category);
    this.router.navigate(['/core/products'],{queryParams:{category}});
  }

}
