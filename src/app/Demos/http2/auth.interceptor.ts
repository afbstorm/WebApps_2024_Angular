import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let currentUser = authService.currentUserValue; // Accès à la valeur de l'utilisateur actuel
  if (currentUser && currentUser.token) {
    // Si l'utilisateur est connecté et possède un token, on clone la requête pour ajouter l'en-tête d'autorisation
    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}` // Ajout du token dans l'en-tête d'autorisation
      }
    })
    return next(request)// Passe la requête modifiée (ou non) au gestionnaire suivant
  }
  return next(req)
};
