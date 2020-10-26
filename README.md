# angular-material-table-component
Spike - Angular Material mat-table component

This is a small Angular application that implements mat-table component.
The data that fills the table consist about courses and each course have many lessons. 

This application includes sorting, filtering and pagination for BE and FE. It also includes a delay spinner component.

## Requirements
- Angular 9
- NodeJS >= 12.18.2
- Typescript >= 3.9.2

## Getting Started
1. Clone the repository:

```
git clone https://github.com/cviquez-sama/angular-material-table-component.git
```

1. Install dependencies `npm install`
1. Start the server: `npm run server`
1. Backend will be running at `http://localhost:9000`
1. Start the application: `npm start`
1. Frontend will be running at `http://localhost:4200/`

## Code structure
<pre>

├── server             DB data and server
├── src
│   ├── app          
│   │   ├── course     This component implements the HTML and CSS of the mat-table
│   │   └── home       Main component, it includes two tabs(buttond) that loads the table
|   |   └── model      Course ans lessons model
|   |   └── services   It includes the sourse service and the Data Source
</pre>



