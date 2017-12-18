import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  links: string[] = [
    'Home',
    'Messages',
    'Department',
    'Staff',
    'Schedule',
    'Profile',
    'Advisor',
    'IES',
    'OWA',
    'Help'
  ];
  subjects: string[] = ['AE', 'AC', 'AR', 'BS', 'BL', 'BM', 'CH', 'EC', 'EL', 'IT', 'MA', 'PH', 'RE'];
  objectKeys = Object.keys;

  subjectsIcons = {
    'AE': 'table',
    'AC': 'dollar',
    'AR': 'home',
    'BS': 'users',
    'BL': 'leaf',
    'BM': 'suitcase',
    'CH': 'flask',
    'EC': 'line-chart',
    'EL': 'quote-right',
    'IT': 'desktop',
    'MA': 'plus-square',
    'PH': 'rocket',
    'RE': 'book'
  };
  subjectLinks: string[] = [
    'Overview',
    'Course Outline',
    'Work Programs',
    'Assessment',
    'Course Resources',
    'VBE',
    'Additional Content',
    'Contact Your Teacher',
    'FAQs',
    'Competency',
    'Copyright'
  ];

  isActive = false;

  nav: string[] = [
    'myHome',
    'myMessages',
    'myDepartment',
    'myStaff',
    'mySchedule',
    'myProfile',
    'myAdvisor',
    'myIES',
    'myOWA',
    'myHelp',
  ];

  sIndex: number = null;

  setIndex(index: number) {
    this.sIndex = index;
  }
}
