import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },

  {path:"users",
  
  loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)
},
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/list/customers-list/customers-list.module').then( m => m.CustomersListPageModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./pages/customers/new/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'edit-customer',
    loadChildren: () => import('./pages/customers/update/edit-customer/edit-customer.module').then( m => m.EditCustomerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
