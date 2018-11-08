import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageDepartmentComponent } from './admin/manage-department/manage-department.component';
import { ManageDirectorComponent } from './admin/manage-director/manage-director.component';
import { ManageFacultyComponent } from './admin/manage-faculty/manage-faculty.component';
import { DirectorDashboardComponent } from './director/director-dashboard/director-dashboard.component';
import { ManageCourseComponent } from './director/manage-course/manage-course.component';
import { ManageSubjectComponent } from './director/manage-subject/manage-subject.component';
import { ManageStudentComponent } from './director/manage-student/manage-student.component';
import { AllowcateSubjectComponent } from './director/allowcate-subject/allowcate-subject.component';
import { ManageStudentSemesterComponent } from './admin/manage-student-semester/manage-student-semester.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { ManageUnitComponent } from './faculty/manage-unit/manage-unit.component';
import { ManageQuestionsComponent } from './faculty/manage-questions/manage-questions.component';
import { ManageExamComponent } from './faculty/manage-exam/manage-exam.component';
import { StdentExamResultComponent } from './faculty/stdent-exam-result/stdent-exam-result.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { ShowExamComponent } from './student/show-exam/show-exam.component';
import { GiveExamComponent } from './student/give-exam/give-exam.component';
import { ShowExamResultComponent } from './student/show-exam-result/show-exam-result.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { DirectorService } from './director.service';
import { FacultyService } from './faculty.service';
import { StudentService } from './student.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'managedepartment',
    component: ManageDepartmentComponent
  },
  {
    path: 'managedirector',
    component: ManageDirectorComponent
  },
  {
    path: 'managefaculty',
    component: ManageFacultyComponent
  },
  {
    path: 'directordashboard',
    component: DirectorDashboardComponent
  },
  {
    path: 'managecourse',
    component: ManageCourseComponent
  },
  {
    path: 'managesubject',
    component: ManageSubjectComponent
  },
  {
    path: 'managestudent',
    component: ManageStudentComponent
  },
  {
    path: 'assignsubject',
    component: AllowcateSubjectComponent
  },
  {
    path: 'managestudsem',
    component: ManageStudentSemesterComponent
  },
  {
    path: 'facultydashboard',
    component: FacultyDashboardComponent
  },
  {
    path: 'manageunit',
    component: ManageUnitComponent
  },
  {
    path: 'managequestion',
    component: ManageQuestionsComponent
  },
  {
    path: 'manageexam',
    component: ManageExamComponent
  },
  {
    path: 'studentsexamresult',
    component: StdentExamResultComponent
  },
  {
    path: 'studentdashboard',
    component: StudentDashboardComponent
  },
  {
    path: 'examlist',
    component: ShowExamComponent
  },
  {
    path: 'giveexam',
    component: GiveExamComponent
  },
  {
    path: 'myresult',
    component: ShowExamResultComponent
  },
  {
    path: 'changepwd',
    component: ChangePasswordComponent
  },
  {
    path: 'resetpwd',
    component: ResetPasswordComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    ManageDepartmentComponent,
    ManageDirectorComponent,
    ManageFacultyComponent,
    DirectorDashboardComponent,
    ManageCourseComponent,
    ManageSubjectComponent,
    ManageStudentComponent,
    AllowcateSubjectComponent,
    ManageStudentSemesterComponent,
    FacultyDashboardComponent,
    ManageUnitComponent,
    ManageQuestionsComponent,
    ManageExamComponent,
    StdentExamResultComponent,
    StudentDashboardComponent,
    ShowExamComponent,
    GiveExamComponent,
    ShowExamResultComponent,
    ChangePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ LoginService,AdminService,DirectorService,FacultyService,StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
