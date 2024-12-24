import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('angular18token');
  const tokenClone = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(tokenClone);
};
