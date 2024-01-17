import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncComponent } from './sync/sync.component';

const routes: Routes = [{ path: '', component: SyncComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
