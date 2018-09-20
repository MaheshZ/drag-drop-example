
import { NgModule } from '@angular/core';
import { DndTestComponent } from './dnd-test/dnd-test.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
      path: 'dnd-test',
      component: DndTestComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }

