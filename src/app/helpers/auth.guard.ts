import { CanActivateFn, Router, NavigationExtras } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../ApiService';

export const authGuard: CanActivateFn = (route, state) => {
  const api = inject(ApiService);
  if (api.getToken()) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['/']);
  }
};
