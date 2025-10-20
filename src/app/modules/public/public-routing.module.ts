import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { buildRemoteModuleConfig } from 'shared';
import { REMOTE_MFE_CONFIG } from '../../../mfe.config';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => loadRemoteModule(
      buildRemoteModuleConfig(REMOTE_MFE_CONFIG.login.remoteEntry, './AuthModule')
    ).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
