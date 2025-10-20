import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { buildRemoteModuleConfig } from 'shared';
import { REMOTE_MFE_CONFIG } from '../../../mfe.config';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => loadRemoteModule(
      buildRemoteModuleConfig(REMOTE_MFE_CONFIG.banner.remoteEntry, './BannerComponent')
    ).then(m => m.BannerComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
