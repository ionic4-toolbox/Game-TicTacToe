import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{ path: 'home', children: [{ path: '', loadChildren: '../home/home.module#HomePageModule' }] },
			{ path: 'tab1', children: [{ path: '', loadChildren: '../tab1/tab1.module#Tab1PageModule' }] },
			{ path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
		]
	},
	{ path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class TabsPageRoutingModule { }
