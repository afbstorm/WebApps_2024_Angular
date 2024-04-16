// Importation des modules nécessaires pour le service
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

// Décorateur Injectable, permettant à cette classe d'être injectée comme une dépendance dans d'autres parties de l'application.
@Injectable({
  providedIn: 'root' // Ce service est fourni à la racine de l'application, ce qui en fait un singleton accessible partout dans l'app.
})
export class AuthService {
  // BehaviorSubject pour gérer l'état de l'utilisateur connecté
  private currentUserSubject: BehaviorSubject<any>;
  // Observable public pour permettre aux composants de s'abonner et réagir aux changements de l'utilisateur connecté
  public currentUser: Observable<any>;

  // Constructeur avec injection du service HttpClient pour les requêtes HTTP
  constructor(private http: HttpClient) {
    // Tentative de récupération de l'utilisateur actuel à partir du stockage local
    const storedUser = localStorage.getItem('currentUser');
    const user = storedUser ? JSON.parse(storedUser) : null; // Parse le JSON seulement si `storedUser` n'est pas null
    this.currentUserSubject = new BehaviorSubject<any>(user);
    this.currentUser = this.currentUserSubject.asObservable(); // Conversion du BehaviorSubject en Observable
  }

  // Accesseur pour obtenir la valeur actuelle de l'utilisateur connecté
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Fonction pour gérer le processus de connexion
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8001/api/users/login', { email, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user)); // Sauvegarde de l'utilisateur connecté dans le stockage local
        this.currentUserSubject.next(user); // Mise à jour de BehaviorSubject
        return user; // Retourne l'utilisateur pour les chaînages ultérieurs
      }));
  }

  // Fonction pour gérer la déconnexion
  logout() {
    localStorage.removeItem('currentUser'); // Supprime l'utilisateur du stockage local
    this.currentUserSubject.next(null); // Réinitialise le BehaviorSubject
  }
}
