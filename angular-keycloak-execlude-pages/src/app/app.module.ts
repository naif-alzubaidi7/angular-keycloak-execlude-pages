import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
import { SecureComponent } from './components/secure/secure.component';
import { environment } from 'src/environments/environment';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const keycloakService = new KeycloakService();
@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule  implements DoBootstrap {
  async ngDoBootstrap(app: any) {
    const { keycloakConfig } = environment;

    try {
      await keycloakService.init({ config: keycloakConfig });

      app.bootstrap(AppComponent);
    } catch (error) {
      console.error('Keycloak init failed', error);
    }
  }
}
