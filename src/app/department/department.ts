import { Component } from '@angular/core';
// import { Home } from './home.component';

@Component({
    selector: 'app-root',
    templateUrl: './department.component.html',
    styleUrls: ['../app.component.css']
})
export class Department {
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
        'Upcoming Events',
        'Timetables & Calendars',
        'Latest News',
        'Orientation Resources'
    ];
}

// 'Overview',
//     'Course Outline',
//     'Work Programs',
//     'Assessment',
//     'Course Resources',
//     'VBE',
//     'Additional Content',
//     'Contact Your Teacher',
//     'FAQs',
//     'Competency',
//     'Copyright'