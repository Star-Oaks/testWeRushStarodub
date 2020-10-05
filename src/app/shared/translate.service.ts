import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslatesService {

  constructor(
    private translate: TranslateService,
    private httpClient: HttpClient,
    private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.chengeLocale(val.url)
      }
    })

  }
  chengeLocale(loc: string) {
    this.setLocale(loc);
    this.translate.setDefaultLang(loc);
    this.router.navigate([`/${loc}`])
  }
  getLanguageTranslationsRequest(): Promise<any> {

    if (this.getLocale()) {
      this.translate.setDefaultLang(this.getLocale());
      return this.httpClient.get<JSON>(`assets/i18n/${this.getLocale()}.json`).toPromise();
    } else {
      const currentLanguage = this.translate.getBrowserLang();
      this.translate.setDefaultLang(currentLanguage);
      this.router.navigate([`/${currentLanguage}`])
      this.setLocale(currentLanguage)
      return this.httpClient.get<JSON>(`assets/i18n/${currentLanguage}.json`).toPromise();
    }
  }
  setLocale(language: string) {
    localStorage.setItem("locale", `${language}`)
  }
  getLocale() {
    return localStorage.getItem("locale")
  }
}


