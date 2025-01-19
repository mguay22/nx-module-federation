import { loadRemote } from '@module-federation/enhanced/runtime';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemote<typeof import('checkout/Routes')>('checkout/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemote<typeof import('products/Routes')>('products/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
