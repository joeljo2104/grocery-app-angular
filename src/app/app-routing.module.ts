import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { AboutpageComponent } from "./pages/aboutpage/aboutpage.component";
import { ContactpageComponent } from "./pages/contactpage/contactpage.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginpageComponent } from "./pages/loginpage/loginpage.component";
import { ProductdetailpageComponent } from "./pages/productdetailpage/productdetailpage.component";
import { ProductpageComponent } from "./pages/productpage/productpage.component";
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'about', component: AboutpageComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactpageComponent, canActivate: [AuthGuard] },
    { path: 'product-detail/:id', component: ProductdetailpageComponent, canActivate: [AuthGuard] },
    { path: 'products/:catId', component: ProductpageComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterpageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: '**', component: ErrorComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}