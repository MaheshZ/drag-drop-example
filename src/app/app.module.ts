import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DndTestComponent } from './dnd-test/dnd-test.component';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DnDNativeComponent } from './dnd-native/component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { RouterEffects } from './effects/router';
import {INIT_SPORTS_PROFILES} from './reducers/sportsprofile';



@NgModule({
  declarations: [
    AppComponent,
    DnDNativeComponent,
    DndTestComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        sportsProfiles: INIT_SPORTS_PROFILES
      }
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule,
     StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
