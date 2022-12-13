import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
