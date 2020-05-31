import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';


export default class UsersRoute extends Route {
   async model() {
       let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
       let parsed = await responce.json();
       return parsed;
    }

    // @service store;
    // async model(params){
    //     return this.store.findAll('post-info');
    // }
}
