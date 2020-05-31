import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
   async model(params) {
       let responcePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
       let parsedPost = await responcePost.json();
       let responceComments = await fetch(`https://jsonplaceholder.typicode.com//comments?postId=${params.id}`);
       let parsedComments = await responceComments.json();

       return {parsedPost, parsedComments};
    }

    // @service store;
    // async model(params){
    //     return this.store.find('post-info', id);
    // }
}
