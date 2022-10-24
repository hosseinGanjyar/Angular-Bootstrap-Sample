import { NgModule } from "@angular/core";
import { ThemeModule } from "src/app/@theme/theme.module";
import { PanelRoutingModule } from "./panel-routing.module";
import { PanelComponent } from "./panel.component";


@NgModule({
    imports: [
        PanelRoutingModule,
        ThemeModule,
    ],
    declarations: [
        PanelComponent
    ],
    providers: []
})
export class PanelModule { }