# angular-basic-routing
Basic routing for Angular 4+

## Local Setup
At a command line, run following steps to clone and launch project:
```
>git clone https://github.com/kozigh01/angular-basic-routing.git
>cd angular-basic-routing
>npm install
>ng serve --open
```

## Project Development Notes
### Project Setup
1. Create new angular app via Angualar CLI:  
```
    ng new angular-basic-routing --routing --prefix=md --style=scss
```
### Create/Sync Github repositoy
1. Create repo in Github
2. Sync to Github from terminal in Angular app root directory:
```
    git commit -m 'initial commit'  
    git remote add origin https://kozigh01@github.com/kozigh01/angular-basic-routing.git  
    git pull origin master --allow-unrelated-histories  
    git push -u origin master
 ```
### Steps to create basic project structures
```
    ng generate module feature1 --routing --module app
    ng generate component feature1 --module feature1
    ng generate component feature1/component1 --module feature1
    
    ng generate module feature2 --routing --module app
    ng generate component feature2/component2 --module feature2
    ng generate component feature2/subcomponents/subcomponent2_1 --module feature2
    ng generate component feature2/subcomponents/subcomponent2_2 --module feature2
    
    ng generate module feature3 --routing --module app
    ng generate component feature3/component3 --module feature3
    ng generate component feature3/subcomponent3_1 --module feature3
    ng generate component feature3/subcomponent3_2 --module feature3
```

### Notes
1. Router module that contains the `{ path: '**', component: RouteNotFoundComponent }` path must be last in the app module "imports' section or the '\*\*' route will be hit before feature module routes.
