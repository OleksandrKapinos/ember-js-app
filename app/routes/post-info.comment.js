import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class PostInfoRoute extends Route {
   async model(params) {
       try{
           // let responcePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
           // let post = await responcePost.json();
           let responceComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`);
           let comments = await responceComments.json();
           // this.store.push(post);
           // this.store.push(comments);
           // let result = {post, comments};
           console.log("result comments info", comments);
           return comments;
       }
       catch (e) {
           console.log('Error in Post Info routes', e);
       }
    }
    // @service store;
    // async model(params){
    //     return this.store.find('post-info', id);
    //}
}
