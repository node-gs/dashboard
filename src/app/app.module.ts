import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// routes
import { Messages } from './messages/messages';
import { Home } from './home/home';
import { Department } from './department/department';
import { Schedule } from './schedule/schedule';
import { Staff } from './staff/staff';

const appRoutes: Routes = [
  { path: 'myMessages', component: Messages },
  { path: 'myHome', component: Home },
  { path: 'myDepartment', component: Department },
  { path: 'mySchedule', component: Schedule },
  { path: 'myStaff', component: Staff }
];


@NgModule({
  declarations: [
    AppComponent,
    Messages,
    Home,
    Department,
    Schedule,
    Staff
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
