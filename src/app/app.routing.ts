import { ModuleWithProviders } from '@angular/core'
import { Routes , RouterModule } from '@angular/router'

import { ZapatillaComponent } from './zapatilla/zapatilla.component'
import { HomeComponent } from './home/home.component'
import { ExternoComponent } from './externo/externo.component'
import { ContactoComponent } from './contacto/contacto.component'

const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'datos-ex',component:ExternoComponent},
    {path:'zapatillas',component:ZapatillaComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**',component:HomeComponent},
]
export const appRoutingProviders:any[] = []
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)