# travel_A

## Guide to run aplication at developer mode

### Prerequisites

* Node.js from: https://nodejs.org;
* Yarn package manager from: https://yarnpkg.com/;
* Mongo DB Compass from: https://www.mongodb.com/download-center/compass;

### Installing

Clone the repository.
```
$ git clone https://github.com/GeovanyMendess/project_travel_A.git
$ cd project_travel_A
```

Install the dependencies using:
``$ yarn``

### Running front-end

```
$ cd web
$ yarn start
```
Then the browser will automatically acess the homepage by a default door.

Now open a new prompt at project_travel_A and use:
 ```
 $ cd backend
 $ yarn travel
 ```

**IMPORTANT: You must keep both prompts running**

Then use the web interface at the navigator to fill the forms.

### Acessing database

Initialize mongo DB compass and use option connect. Use the following code to acess the database:
'mongodb+srv://visitor:A8DJaAMCgAg4WZP@cluster0-siiem.gcp.mongodb.net/test'. 

The information is stored at DB test.




