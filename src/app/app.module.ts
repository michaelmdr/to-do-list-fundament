import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { FormsModule } from '@angular/forms';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChecklistItemComponent,
    ChecklistComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
