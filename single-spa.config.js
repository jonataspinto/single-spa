import {registerApplication, start} from 'single-spa'
registerApplication(
    'navBar', 
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true
);

registerApplication(
  'home',
  () => import('./src/home/home.app.js'),
  () => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
    'angularJS', 
    () => import ('./src/angularJS/angularJS.app.js'), 
    () => {}
);


start()

function pathPrefix(prefix) {
    return function (location) {
      return location.pathname.startsWith(`${prefix}`);
    }
  }