# activator-play-aureliajs
In this project, we have used aurelia app in play project. The aurelia app is built and used as dependency in play project.
Aurelia project works as client and play project works as server, but to run the project, we have run only play project.
Whenever any changes are made in the aureluia project, we have to build it and pull it in play's public project.

###Publishing and running aureliaJs project
prerequisite for aurelia project is **npm**. We have to build the aurelia project and then put it into play project.
Build aurelia project
To build aurelia project, Go to aurelia folder
```
  cd aurelia
```
Run aurelia project
```
  npm install
```
```
  npm run dev
```
Build aurelia project
```
  npm run prod
```
After building the aurelia project, we will get a __dist__ folder. Copy that folder into play project's public/javascript/ folder. (Replace if already exists)


###Running project
To run the project we have to go to project folder and run the following command

```
  ./bin/activator run
```
