import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'messages.component.html',
    styleUrls: ['../app.component.css']
})
export class Messages {
    title = 'app';


    links: string[] = [
        'Home',

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
        'Compose',
        'Inbox',
        'Sent Items',
        'Signature',
    ];
}
