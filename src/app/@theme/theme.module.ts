import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})
export class ThemeModule { }