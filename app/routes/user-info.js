import Route from '@ember/routing/route';

export default class UserPostsRoute extends Route {
   async model(params) {
       let responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
       let parsed = await responce.json();
       console.log('entered params in user info', params);
       console.log('entered parsed in user info', parsed);
       return parsed;
    }
}
