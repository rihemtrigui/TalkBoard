// app.routes.ts
import { Routes } from '@angular/router';
import { CreatePost } from './pages/create-post/create-post';
import { Home } from './pages/home/home';
import { ViewPost } from './pages/view-post/view-post';





export const routes: Routes = [
  { path: "create-post", component: CreatePost },
  { path: "", component: Home},
  { path: "view-post/:id", component: ViewPost}

];