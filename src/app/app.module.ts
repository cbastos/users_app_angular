import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { API_BASE_URL } from './constants';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users/users.component';
import { UsersEffects } from './users/state/usersEffects';
import { StoreModule } from '@ngrx/store';
import { UsersState } from './users/state/usersState';
import { UsersReducer } from './users/state/usersReducer';
import { UsersAgent } from './users/state/agents/usersAgent';
import { SortByPipe } from './users/sortBy.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		StoreModule.forRoot<UsersState>({ users: UsersReducer }),
		EffectsModule.forRoot([UsersEffects])
	],
	declarations: [UsersComponent, SortByPipe],
	bootstrap: [UsersComponent],
	providers: [
		UsersAgent,
		{ provide: API_BASE_URL, useFactory: () => AppModule.apiUrl }
	]
})
export class AppModule {
	static apiUrl: string;
}
