import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleAComponent } from "./module-a/pages/module-a.component";
import { ModuleBComponent } from "./module-b/pages/module-b.component";
import { PanelComponent } from "./panel.component";


const routes: Routes = [
    {
        path: '',
        component: PanelComponent,
        children: [
            {
                path: 'a',
                component: ModuleAComponent
            },
            {
                path: 'b',
                component: ModuleBComponent
            },
            {
                path: '', redirectTo: 'a', pathMatch: 'full'
            },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class PanelRoutingModule { }