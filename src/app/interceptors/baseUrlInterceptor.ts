import { HttpInterceptorFn } from '@angular/common/http';
import { ApiAddress } from '../utilities/apiAddress';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('http://') && !req.url.startsWith('https://')) {
    var modifieUrl = req.clone({
      url: `${ApiAddress.baseUrl}${req.url}`,
    });
    return next(modifieUrl);
  } else {
    return next(req);
  }
};
