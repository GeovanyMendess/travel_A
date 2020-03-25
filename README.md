# travel_A

## Description

This aplication allows the creation of travels and save them into the mongoDB database

## Guide to run aplication at developer mode

### Prerequisites

* Node.js from: https://nodejs.org;
* Yarn package manager from: https://yarnpkg.com/;
* Mongo DB Compass from: https://www.mongodb.com/download-center/compass;

### Installing

Clone the repository.
```
$ git clone https://github.com/GeovanyMendess/project_travel_A.git
```
Then open the command prompt at the directory above.

### Running frontend

Execute this commands to run the frontend.
```
$ cd web
$ yarn
$ yarn start
```

### Running backend

Now open a new prompt at project_travel_A again and use the following command:

 ```
 $ cd backend
 $ yarn
 $ yarn travel
 ```

**IMPORTANT: You must keep both prompts running**

Then use the web interface at the navigator to fill the forms.

### Acessing database

Initialize mongo DB compass and use option connect. Use the following code to acess the database:
'mongodb+srv://visitor:A8DJaAMCgAg4WZP@cluster0-siiem.gcp.mongodb.net/test'. 

The information is stored at DB 'test'.




