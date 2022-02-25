import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { LoginformComponent } from './loginform/loginform.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ReviewComponent,
    ContactComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
