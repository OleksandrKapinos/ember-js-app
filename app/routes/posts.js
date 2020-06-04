import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';


export default class PostsRoute extends Route {

    // redirect(model, transition) {
    //     if (model.get('length') === 1) {
    //         this.transitionTo('posts.post', model.get('firstObject'));
    //     }
    // }

    async model() {
        try {
            let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            let parsed = await responce.json();
            return parsed;
        } catch (e) {
            console.log('Error in Posts routes', e);
        }

        // @service store;
        // async model(params){
        //     return this.store.findAll('post-info');
        // }
    }
}
