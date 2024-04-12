import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ArticlesComponent} from "../articles/articles.component";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    FormsModule,
    ArticlesComponent,
    CurrencyPipe,
    CardModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    DatePipe
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

  listeArticle: article[] = [];

  article: article = {
    id: this.listeArticle.length +1,
    prix: 0,
    nom: '',
    quantite: 0,
    date: new Date()
  }

  totalPanier: number = 0;
  onSubmit() {
    this.ajoutArticle(this.article)
  }

  total(): void {
    this.totalPanier = this.listeArticle.reduce((acc, article) => acc + article.prix * article.quantite!, 0);
  }
  ajoutArticle(article: article) {
    const existingArticle = this.listeArticle.find(item => item.nom === article.nom);
    if (existingArticle) {
      if (existingArticle.quantite === 5) {
        return;
      } else {
        existingArticle.quantite = (existingArticle.quantite || 1) + 1;
      }
    } else {
      this.listeArticle.push({ ...article, quantite: article.quantite });
    }
    this.total();
    this.resetForm();
  }

  resetForm() {
    this.article = {
      id: this.listeArticle.length +1,
      prix: 0,
      nom: '',
      quantite: 0,
      date: new Date()
    }
  }

  suppressionArticle(articleId: number) {
    const article = this.listeArticle.find(item => item.id === articleId);
    if (article && article.quantite && article.quantite > 1) {
      article.quantite--;
    } else {
      this.listeArticle = this.listeArticle.filter(item => item.id !== articleId);
    }
    this.total();
  }
}

export interface article {
  id: number;
  prix: number;
  nom: string;
  quantite: number;
  date: Date;
}
