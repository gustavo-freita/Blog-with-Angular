import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
  contentTitel:string = "Lorem ipsum, dolor sit amet consectetur."
  contentDescription:string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sed consectetur explicabo, sint repellat obcaecati molestias aliquid aspernatur rem. Autem eum laboriosam sit saepe dolore tenetur. Voluptates dolor cum tenetur!"

  constructor (
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    );
  }
}
