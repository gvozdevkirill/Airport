import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './components/request/request.component';
import { NeedsAmountViewComponent } from './pages/needs-amount-view/needs-amount-view.component';
import { RequestsViewComponent } from './pages/requests-view/requests-view.component';

const routes: Routes = [
  {
    path: 'requests/add',
    component: RequestComponent
  },
  {
    path: 'requests',
    component: RequestsViewComponent
  },
  {
    path: 'need-amount',
    component: NeedsAmountViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
