import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { EventService } from '../../services/event-services';
import { isPlatformBrowser } from '@angular/common';

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  //sessionStorage.setItem('auth_token', 'your_auth_token_here');

  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const token = sessionStorage.getItem('token');

    if (token) {
      const newReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`),
      });

      return next(newReq);
    }
  }

  return next(req);
}
