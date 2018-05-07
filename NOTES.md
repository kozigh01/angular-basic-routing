# angular-basic-routing
Basic routing for Angular 4+
## Project Setup
1. Create new angular app via Angualar CLI:  
```
    ng new angular-basic-routing --routing --prefix=md --style=scss
```
## Create/Sync Github repositoy
1. Create repo in Github
2. Sync to Github from terminal in Angular app root directory:
```
    git commit -m 'initial commit'  
    git remote add origin https://kozigh01@github.com/kozigh01/angular-basic-routing.git  
    git pull origin master --allow-unrelated-histories  
    git push -u origin master
 ```
## Steps to create basic project structures
```
    ng generate module feature1 --routing --module app
    ng generate component feature1 --module feature1
    ng generate component feature1/component1 --module feature1
    
    ng generate module feature2 --routing --module app
    ng generate component feature1/component2 --module feature2
```

