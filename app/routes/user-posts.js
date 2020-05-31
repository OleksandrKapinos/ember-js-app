import Route from '@ember/routing/route';

export default class UserPostsRoute extends Route {
   async model(params) {
       let responce = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`);
       let parsed = await responce.json();
       console.log('entered params in user posrts', params);
       console.log('entered parsed in user posrts', parsed);
       return parsed;
    }
}
