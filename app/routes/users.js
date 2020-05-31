import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
   async model() {
       let responce = await fetch('https://jsonplaceholder.typicode.com/users');
       let parsed = await responce.json();
       return parsed;
    }
}
