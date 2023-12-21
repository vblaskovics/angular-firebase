import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthServiceService).isLoggedIn().pipe(map(user => {
    if (user) {
      return true;
    }
    return router.createUrlTree(['/login']);
  }));
};
