export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: 'signup',  name: 'signup', moduleId: 'signup', nav: true, title: 'Signup' },
      { route: ['login',''], name: 'login', moduleId: 'login', nav: true, title:'Login'},
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard', nav: true, title: 'Dashboard'}
    ]);

    this.router = router;
  }
}
