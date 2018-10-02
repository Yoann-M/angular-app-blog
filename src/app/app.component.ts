import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lacus at nibh rhoncus sagittis. Sed sed imperdiet risus. Nam tristique, nunc ac volutpat cursus, leo nisl congue tellus, non vestibulum nulla lectus non elit. Duis ut feugiat libero. Vivamus a est placerat orci suscipit aliquam at et sapien. Phasellus vel tristique nisi, sed vestibulum metus.'
    },
    {
      title: 'Mon deuxième Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lacus at nibh rhoncus sagittis. Sed sed imperdiet risus. Nam tristique, nunc ac volutpat cursus, leo nisl congue tellus, non vestibulum nulla lectus non elit. Duis ut feugiat libero. Vivamus a est placerat orci suscipit aliquam at et sapien. Phasellus vel tristique nisi, sed vestibulum metus.'
    },
    {
      title: 'Encore un Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lacus at nibh rhoncus sagittis. Sed sed imperdiet risus. Nam tristique, nunc ac volutpat cursus, leo nisl congue tellus, non vestibulum nulla lectus non elit. Duis ut feugiat libero. Vivamus a est placerat orci suscipit aliquam at et sapien. Phasellus vel tristique nisi, sed vestibulum metus.'
    },
  ]
}
